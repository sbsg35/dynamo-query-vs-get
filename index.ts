import {
  DynamoDBClient,
  GetItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { max, mean, min } from "lodash";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const delay = () => new Promise((resolve, _) => setTimeout(resolve, 100));

const userId = "ff74d2c7-daae-46cb-96bf-0e6ebfebad1e";
const TableName = "location-uat";
const loopCount = 101;

export const getItem = async () => {
  const t0 = performance.now();

  const command = new GetItemCommand({
    TableName,
    Key: marshall({ userId: "ff74d2c7-daae-46cb-96bf-0e6ebfebad1e" }),
    ConsistentRead: true,
  });

  const response = await docClient.send(command);
  if (!response.Item) console.log("Item does not exist");

  const t1 = performance.now();
  const timeTaken = t1 - t0;

  console.log("getItem, timeTaken: " + timeTaken.toFixed(2) + "ms");
  return timeTaken;
};

export const queryItem = async () => {
  const t0 = performance.now();
  const command = new QueryCommand({
    TableName,
    ScanIndexForward: true,
    IndexName: undefined,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeValues: {
      ":id": {
        S: userId,
      },
    },
    ExpressionAttributeNames: {
      "#id": "userId",
    },
  });

  const response = await docClient.send(command);
  if (!response.Items) console.log("Item does not exist");

  const t1 = performance.now();
  const timeTaken = t1 - t0;

  console.log("queryItem, timeTaken: " + timeTaken.toFixed(2) + "ms");
  return timeTaken;
};

const funcToRun = process.env.QUERY_TYPE === "get" ? getItem : queryItem;

const timeArray: number[] = [];
const main = async () => {
  for (let i = 0; i < loopCount; i++) {
    const timeTaken = await funcToRun();
    await delay();
    if (i !== 0) timeArray.push(timeTaken);
  }
  console.log("\n Complete");
  console.log("Average time " + mean(timeArray) + "ms");
  console.log("max time " + max(timeArray) + "ms");
  console.log("min time " + min(timeArray) + "ms");
};

main();

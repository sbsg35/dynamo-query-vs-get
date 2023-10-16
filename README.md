# Dynamo query vs get

Test to see if there are any performance differences between query and get for a single item.

## Getting started

```
npm i
npm run build
npm run query-item # get item using dynamo query
npm run get-item # get item using dynamo get
```

## Results

These are the results based off a dynamo table ~2.4m records and size ~208mb. I requested a record 100 times and ran the test 5 times for both GetItem and QueryItem. I posted the best results for each. I excluded the first request from this data, since that usually takes 300ms - 2000ms due to initialisation of the dynamo client.

| Run number | GetItem  | QueryItem |
| ---------- | -------- | --------- |
| 1          | 47.06ms  | 49.05ms   |
| 2          | 46.46ms  | 51.52ms   |
| 3          | 44.96ms  | 46.32ms   |
| 4          | 44.66ms  | 47.53ms   |
| 5          | 44.62ms  | 47.48ms   |
| 6          | 44.60ms  | 46.97ms   |
| 7          | 45.65ms  | 48.52ms   |
| 8          | 51.47ms  | 49.05ms   |
| 9          | 44.93ms  | 47.26ms   |
| 10         | 44.99ms  | 47.19ms   |
| 11         | 45.94ms  | 48.06ms   |
| 12         | 44.32ms  | 46.91ms   |
| 13         | 44.46ms  | 46.37ms   |
| 14         | 44.60ms  | 231.68ms  |
| 15         | 43.86ms  | 43.82ms   |
| 16         | 42.82ms  | 43.81ms   |
| 17         | 44.97ms  | 43.13ms   |
| 18         | 43.48ms  | 45.38ms   |
| 19         | 43.60ms  | 45.78ms   |
| 20         | 49.05ms  | 57.46ms   |
| 21         | 43.89ms  | 46.33ms   |
| 22         | 44.02ms  | 45.76ms   |
| 23         | 44.26ms  | 46.51ms   |
| 24         | 44.69ms  | 52.59ms   |
| 25         | 43.64ms  | 45.12ms   |
| 26         | 46.46ms  | 44.16ms   |
| 27         | 43.31ms  | 45.38ms   |
| 28         | 43.45ms  | 45.45ms   |
| 29         | 43.90ms  | 43.97ms   |
| 30         | 44.50ms  | 45.39ms   |
| 31         | 44.16ms  | 46.10ms   |
| 32         | 45.69ms  | 46.42ms   |
| 33         | 43.19ms  | 45.97ms   |
| 34         | 44.42ms  | 45.45ms   |
| 35         | 43.75ms  | 53.12ms   |
| 36         | 43.75ms  | 47.83ms   |
| 37         | 44.87ms  | 48.08ms   |
| 38         | 45.84ms  | 46.55ms   |
| 39         | 44.73ms  | 45.79ms   |
| 40         | 45.56ms  | 45.13ms   |
| 41         | 44.70ms  | 47.16ms   |
| 42         | 44.56ms  | 45.18ms   |
| 43         | 44.89ms  | 44.91ms   |
| 44         | 45.91ms  | 46.13ms   |
| 45         | 44.86ms  | 46.49ms   |
| 46         | 45.00ms  | 45.63ms   |
| 47         | 42.61ms  | 45.74ms   |
| 48         | 44.11ms  | 46.25ms   |
| 49         | 44.06ms  | 45.60ms   |
| 50         | 42.81ms  | 45.17ms   |
| 51         | 46.59ms  | 46.95ms   |
| 52         | 44.36ms  | 45.59ms   |
| 53         | 43.60ms  | 45.44ms   |
| 54         | 43.65ms  | 44.72ms   |
| 55         | 42.93ms  | 45.85ms   |
| 56         | 41.99ms  | 44.57ms   |
| 57         | 43.13ms  | 46.01ms   |
| 58         | 44.30ms  | 46.74ms   |
| 59         | 44.97ms  | 46.53ms   |
| 60         | 44.24ms  | 46.42ms   |
| 61         | 44.72ms  | 45.96ms   |
| 62         | 43.64ms  | 45.62ms   |
| 63         | 46.90ms  | 45.86ms   |
| 64         | 44.25ms  | 46.98ms   |
| 65         | 43.73ms  | 46.23ms   |
| 66         | 49.41ms  | 46.43ms   |
| 67         | 43.63ms  | 44.75ms   |
| 68         | 44.63ms  | 45.97ms   |
| 69         | 44.45ms  | 49.61ms   |
| 70         | 44.27ms  | 46.32ms   |
| 71         | 45.60ms  | 44.57ms   |
| 72         | 43.27ms  | 47.85ms   |
| 73         | 43.85ms  | 45.51ms   |
| 74         | 44.16ms  | 45.22ms   |
| 75         | 42.25ms  | 45.49ms   |
| 76         | 44.80ms  | 47.12ms   |
| 77         | 43.65ms  | 46.40ms   |
| 78         | 43.87ms  | 44.64ms   |
| 79         | 44.33ms  | 45.86ms   |
| 80         | 53.80ms  | 44.66ms   |
| 81         | 45.04ms  | 45.72ms   |
| 82         | 43.61ms  | 46.10ms   |
| 83         | 44.29ms  | 45.83ms   |
| 84         | 45.08ms  | 44.96ms   |
| 85         | 42.83ms  | 45.68ms   |
| 86         | 43.95ms  | 43.86ms   |
| 87         | 44.12ms  | 43.80ms   |
| 88         | 44.24ms  | 45.01ms   |
| 89         | 44.54ms  | 45.41ms   |
| 90         | 45.32ms  | 45.05ms   |
| 91         | 42.73ms  | 45.16ms   |
| 92         | 242.18ms | 45.96ms   |
| 93         | 42.94ms  | 45.39ms   |
| 94         | 43.56ms  | 44.72ms   |
| 95         | 44.12ms  | 47.40ms   |
| 96         | 43.48ms  | 45.04ms   |
| 97         | 45.42ms  | 47.47ms   |
| 98         | 44.81ms  | 46.80ms   |
| 99         | 44.06ms  | 44.33ms   |
| 100        | 43.13ms  | 45.52ms   |

### GetItem

Average time: 46.56ms
max time: 242.18ms
min time: 41.99ms

### QueryItem

Average time: 48.11ms
max time: 231.67ms
min time: 43.13ms

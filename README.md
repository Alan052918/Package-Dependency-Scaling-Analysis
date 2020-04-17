# Package-Dependency-Scaling-Analysis

SUSTech CSE Junda AI

- [Package-Dependency-Scaling-Analysis](#package-dependency-scaling-analysis)
  - [Experiment design](#experiment-design)
    - [Overview](#overview)
    - [Sampling JavaScript projects](#sampling-javascript-projects)
    - [Making tests](#making-tests)
  - [Collection of packge dependency files of influential ReactJS projects](#collection-of-packge-dependency-files-of-influential-reactjs-projects)
    - [yarn.lock](#yarnlock)
    - [package-lock.json](#package-lockjson)

## Experiment design

### Overview

The goal of the experiment is to examine the soundness of our dependency-pruning alogrithm: that projects won't crash or lose functionality after pruning. The workload of the experiment can be distributed into two tasks:

1. Sample typical JavaScript projects
2. Make tests to ensure that if the program pass the tests after pruning, then it is not broken

### Sampling JavaScript projects

Universe: GitHub public repositories in language `JavaScript`.

A total of 913 GitHub repositories was crawled and assigned weight based on their `watch`, `star`, and `fork` counts.

| Role                                  | Metric  | Description                                   | Weight |
| ------------------------------------- | ------- | --------------------------------------------- | ------ |
| Subscribers, passive relating         | `watch` | keep up with news and modifications           | 2      |
| Collectors, proactive relating        | `star`  | add to one's own collections for quick search | 3      |
| Colaborators, proactive participating | `fork`  | participate in the development of the project | 4      |

$$weight = watch\times2 + star\times3 + fork\times3$$

Project Excerpt

| No. | Repository                                                                          | Used by | Watch    | Star                  | Fork                    |
| --- | ----------------------------------------------------------------------------------- | ------- | -------- | --------------------- | ----------------------- |
| 1   | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)           | 21      | 8.4k     | 310k (1st overall)    | 23.9k (4th overall)     |
| 1   | [twbs/bootstrap](https://github.com/twbs/bootstrap)                                 | 1.5m    | 7.2k     | 140k (4th overall)    | 68.6k (1st overall)     |
| 2   | [vuejs/vue](https://github.com/vuejs/vue)                                           | 81.2k   | 6.1k     | 161k (2nd overall)    | 24.4k (3rd overall)     |
| 3   | [facebook/react](https://github.com/facebook/react)                                 | 3.4m    | 6.7k     | 147k (3rd overall)    | 28.3k (2nd overall)     |
| 4   | [airbnb/javascript](https://github.com/airbnb/javascript)                           | 361k    | 3.6k     | 94.3k (5th overall)   | 18.4k (7th overall)     |
| 5   | ~~[nodejs/node](https://github.com/nodejs/node)~~                                   | -       | ~~2.9k~~ | ~~69k (7th overall)~~ | ~~16.6k (8th overall)~~ |
| 6   | [mrdoob/three.js](https://github.com/mrdoob/three.js)                               | 30.2k   | 2.5k     | 59.6k (9th overall)   | 23k (5th overall)       |
| 7   | [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) | 8       | 2.7k     | 66.5k (8th overall)   | 11k                     |
| 8   | [axios/axios](https://github.com/axios/axios)                                       | 2.3m    | 1.2k     | 71.7k (6th overall)   | 6.4k                    |
| 9   | [jquery/jquery](https://github.com/jquery/jquery)                                   | 397k    | 3.4k     | 53.1k                 | 19.2k (6th overall)     |
| 10  | [mui-org/material-ui](https://github.com/mui-org/material-ui)                       | 192k    | 1.3k     | 56.2k (10th overall)  | 15.3k (9th overall)     |
| 11  | [atom/atom](https://github.com/atom/atom)                                           | -       | 2.5k     | 51.6k                 | 14.3k (10th overall)    |
| 12  | [30-seconds/30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code)   | -       | 1.7k     | 55.8k                 | 6.2k                    |

### Making tests

## Collection of packge dependency files of influential ReactJS projects

### yarn.lock

- Facebook/react (145k stars): https://raw.githubusercontent.com/facebook/react/master/yarn.lock
- Lottie for React Native, iOS, and Android (12.7k stars): https://raw.githubusercontent.com/react-native-community/lottie-react-native/master/yarn.lock
- React Navigation (17.6k stars): https://raw.githubusercontent.com/react-navigation/react-navigation/master/yarn.lock
- React slack clone (1.2k stars): https://github.com/lukejacksonn/react-slack-clone/blob/master/yarn.lock
- SoundRedux (4.9k stars): https://github.com/andrewngu/sound-redux/blob/master/yarn.lock

### package-lock.json

- Apple Music.JS (1.6k stars): https://github.com/tvillarete/apple-music-js/blob/master/package-lock.json
- Cezerin - Ecommerce Progressive Web Apps (1.9k stars): https://github.com/cezerin/cezerin/blob/master/package-lock.json
- duxianwei520/react (3.5k stars): https://github.com/duxianwei520/react/blob/master/package-lock.json
- Hackernews React GraphQL (3.7k stars): https://github.com/clintonwoo/hackernews-react-graphql/blob/master/package-lock.json
- React boilerplate (24.7k stars): https://github.com/react-boilerplate/react-boilerplate/blob/master/package-lock.json

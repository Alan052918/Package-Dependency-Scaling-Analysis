# Package-Dependency-Scaling-Analysis

SUSTech CSE Junda AI

- [Package-Dependency-Scaling-Analysis](#package-dependency-scaling-analysis)
  - [Experiment Design](#experiment-design)
    - [Overview](#overview)
    - [Sampling JavaScript projects](#sampling-javascript-projects)
      - [Project excerpt](#project-excerpt)
      - [Scraped average (920 repositories)](#scraped-average-920-repositories)
    - [Making tests](#making-tests)
  - [Dependency Types](#dependency-types)
  - [Collection of Packge Dependency Files of Influential ReactJS Projects](#collection-of-packge-dependency-files-of-influential-reactjs-projects)
    - [yarn.lock](#yarnlock)
    - [package-lock.json](#package-lockjson)

## Experiment Design

### Overview

The goal of the experiment is to examine the soundness of our dependency-pruning alogrithm: that projects won't crash or lose functionality after pruning. The workload of the experiment can be distributed into two tasks:

1. Sample typical JavaScript projects
2. Make tests to ensure that if the program pass the tests after pruning, then it is not broken

### Sampling JavaScript projects

Universe: GitHub public repositories in language `JavaScript`.

A total of [920 GitHub repositories](repo-sampling/repos.csv) was crawled and assigned weight based on their `watch`, `star`, and `fork` counts. Based on their power of relating people to the project, from passive relating to proactive participating, a weight coefficient is assigned to each. And repository influence [ranking](repo-sampling/weight.csv) is sorted according to weights.

| Metric  | Role                                  | Description                                   | Weight |
| ------- | ------------------------------------- | --------------------------------------------- | ------ |
| `watch` | Subscribers, passive relating         | keep up with news and modifications           | 2      |
| `star`  | Collectors, proactive relating        | add to one's own collections for quick search | 3      |
| `fork`  | Colaborators, proactive participating | participate in the development of the project | 4      |

weight = `watch`*2 + `star`*3 + `fork`\*4

#### Project excerpt

| No. | Repository                                                                          | Watch    | Star                    | Fork                    | Weight           |
| --- | ----------------------------------------------------------------------------------- | -------- | ----------------------- | ----------------------- | ---------------- |
| 1   | [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp)           | 8395     | 309944 (1st overall)    | 23919 (4th overall)     | 1042298          |
| 2   | [twbs/bootstrap](https://github.com/twbs/bootstrap)                                 | 7145     | 140024 (4th overall)    | 68615 (1st overall)     | 708822           |
| 3   | [vuejs/vue](https://github.com/vuejs/vue)                                           | 6121     | 161779 (2nd overall)    | 24481 (3rd overall)     | 595503           |
| 4   | [facebook/react](https://github.com/facebook/react)                                 | 6646     | 147007 (3rd overall)    | 28419 (2nd overall)     | 567989           |
| 5   | [airbnb/javascript](https://github.com/airbnb/javascript)                           | 3556     | 94520 (5th overall)     | 18412 (7th overall)     | 364320           |
| 6   | ~~[nodejs/node](https://github.com/nodejs/node)~~                                   | ~~2926~~ | ~~69168 (7th overall)~~ | ~~16676 (8th overall)~~ | ~~280060~~       |
| 7   | [mrdoob/three.js](https://github.com/mrdoob/three.js)                               | 2468     | 59767 (9th overall)     | 23099 (5th overall)     | 276633           |
| 8   | [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) | 2690     | 67804 (8th overall)     | 11211                   | 253636           |
| 9   | [axios/axios](https://github.com/axios/axios)                                       | 1175     | 71959 (6th overall)     | 6450                    | 244027           |
| 10  | [jquery/jquery](https://github.com/jquery/jquery)                                   | 3414     | 53169                   | 19231(6th overall)      | 243259           |
| 11  | [mui-org/material-ui](https://github.com/mui-org/material-ui)                       | 1331     | 56410 (10th overall)    | 15491 (9th overall)     | 233856           |
| 12  | [atom/atom](https://github.com/atom/atom)                                           | 2493     | 51674                   | 14351 (10th overall)    | 217412           |
| 13  | [30-seconds/30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code)   | 1728     | 55837                   | 6203                    | 195779           |
| 14  | [webpack/webpack](https://github.com/webpack/webpack)                               | 1626     | 53794                   | 6944                    | 192410           |
| 15  | [chartjs/Chart.js](https://github.com/chartjs/Chart.js)                             | 1455     | 48155                   | 10287                   | 188523 (>98.37%) |

> Nodejs does not have dependencies and package-lock.json file, thus is not applicable to the pruning algorithm.

#### Scraped average (920 repositories)

- `watch`: 171.46847826086957
- `star`: 4700.648913043478
- `fork`: 951.133695652174

### Making tests

## Dependency Types

| Type                 | Summary                                                              |
| -------------------- | -------------------------------------------------------------------- |
| dependencies         | Required for the application to run                                  |
| devDependencies      | Required in the development flow but not for running the application |
| peerDependencies     | Compatible hosts for plugin packages                                 |
| optionalDependencies | Negligible to yarn/npm install process                               |
| bundledDependencies  | Supplements to normal dependencies                                   |

References

- Yarn documentation [Types of dependencies](https://classic.yarnpkg.com/en/docs/dependency-types/)
- Abhishek Singh's Medium blog [Different types of dependencies in a Node.js application explained](https://medium.com/javascript-in-plain-english/what-the-dependency-types-of-dependencies-in-a-node-js-application-explained-904a5424fbd3)
- Domenic's in-depth blog about [Peer Dependencies](https://blog.domenic.me/peer-dependencies/)

## Collection of Packge Dependency Files of Influential ReactJS Projects

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

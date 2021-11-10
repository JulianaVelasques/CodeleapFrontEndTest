<h1 align="center"> Codeleap Social Network <h1>

<h4 align="center">
  🚀 Codelearp Frontend Test.
</h4>

<p align="center">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/JulianaVelasques/CodeleapFrontEndTest">
  
  <a href="https://github.com/JulianaVelasques/CodeleapFrontEndTest/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/JulianaVelasques/CodeleapFrontEndTest">
  </a>

  <a href="https://github.com/JulianaVelasques/CodeleapFrontEndTest/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/JulianaVelasques/CodeleapFrontEndTest">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#page_with_curl-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-built-with">Built With</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sweat_smile-known-issues">Known Issues</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>
  
 ## Demonstration
  <div align='center'><img src="Demo.gif" alt="Demo" width="300" /></div>
  

  
## :page_with_curl: About
The Codeleap Social Network app was created for the junior frontend test at Codeleap. 
This social app allows you to log in with your username and make posts on the main screen. You can edit and delete your posts as well. All data received and manipulated in the app were made only by the frontend using redux, no api or mock was created.



#### Motivation
This app was created to fulfill a code test for a junior frontend role at Codeleap.


## :wrench: Built With

- [ReactNative](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [Redux](https://redux.js.org/)
- [JavaScript](https://www.javascript.com/)

## 🤔 How to Contribute

- Clone the project: `git clone git@github.com:JulianaVelasques/CodeLeapFrontEndTest.git`;
- Create your branch with your feature: `git checkout -b my-feature`;
- Install the dependencies: `npm install` and `yarn add`
- You'll need app on your phone or emulator. For this project I use Android Studio.
- Run the application: `expo start`
- Commit your feature: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push -u origin my-feature`.

After the merge of your pull request is done, you can delete your branch.
  
## :sweat_smile: Known Issues
  I'll keep working on it, but if you know how to solve it, please let me know:
  - Username: When passing the username to the post content, it is taking all the usernames inside the array of users and shows on screen. So we need to fix it to be able to only take the current user or delete the last user from the store when adding another user. I guess the error is inside the MainScreen line 19.
  - Time Ago: I'm having almost the same error here because I'm not been able to take only the date from the same post id. It is taking an array of all date (MainScreen: line 23). I wanted to be able to take only the date from the array and then use it to take the timeAgo (line 30) and set it to fulfill the time prop inside the post content.
  - Time: As I couldn't take the timeAgo yet, I fulfill the time props with the date generated when the post is created. Not the way it should be. 
  - Sorting by newest: One thing leads to another and I couldn't do the sort on the newest posts. So when the user posts a new post, it goes below the one posted recently.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

---

Made with ♥ by <tr>
    <td align="center"><a href="https://github.com/JulianaVelasques"><b>Juliana Velasques</b></a><br /></td>
<tr>

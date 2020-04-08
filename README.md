### Initialization

2. Run `cd gooddata-js-interview-master`.
3. Run `yarn install`.
4. Run `yarn start`.
5. Visit https://localhost:3000/account.html, and log in using your GoodData account credentials.
   - If you do not have a GoodData account yet, [create one](https://gooddata-examples.herokuapp.com/registration). After creating a GoodData account, you will be redirected to our GoodData.UI Live Examples. Feel free to get inspired there, but its not related to this homework.

### Task

**Make the dropdown work. That is, the dropdown `onChange` should reload the upper chart appropriately.**

When you are done, send us the link to your source code repo and the instructions how to run the demo.

We are looking for re-usable code. You are strongly encouraged to "over-engineer" this to show off your software architecture and designing skills. Assume that this abstract application will be the first component of a large scale application.

### GoodData.UI Documentation

[GoodData.UI Documentation](https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html)

### Troubleshooting

###### Cloning the repo fails

- If cloning using SSH fails, try HTTPS instead: `git clone https://github.com/gooddata/gooddata-js-interview.git`.

###### Server https://developer.na.gooddata.com/ seems to be down.

- If you decided to work on this homework during the weekend, it is possible our platform may be down for several hours due to maintenance (typically on Saturdays). If https://developer.na.gooddata.com/ is down, try again in an hour or two. If you need more time to work on this homework, let us know.

###### Charts do not get loaded.

- Most likely, you are not logged in correctly. Check the Network tab in Google Chrome DevTools. If you see `HTTP 401 ERROR`, visit https://localhost:3000/account.html and log in properly.

###### Anything else?

- Contact your recruiter for further information.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Gradle Service Poller 
The service consists of a back-end service written in Vert.x (https://vertx.io/) that keeps a list of services (defined by a URL), and periodically does an HTTP GET to each and saves the response ("OK" or "FAIL").

## Front-end: React
- Using my own starter: (React Strict TS Eslint Prettier Husky Starter)[https://github.com/thepedroferrari/React-Strict-TS-Eslint-Prettier-Husky-Starter]

### Folder Structure
- components: Place all your components there. Each on its own folder. Child components belong on their parent folder unless they are used by another component. Export from an index.ts file.

- constants: Files for different types of constants you might need on your app. Export from an index.ts file.

- hooks: Each hook belongs on its own file and should have its own named export. Export from an index.ts file.

- types: Types that may be globally needed. Not to confuse with components props. Those should be close with each particular component.

- utils: Utility functions that serve multiple purpose and might have a re-use. 

---

# Building
Opens the service poller at [http://localhost:8080](http://localhost:8080)
```
./gradlew clean run
```
## Frontend
```
yarn start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
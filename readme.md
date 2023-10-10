# Namaste React 🚀

# Assignment 1

# What is Emmet?

- Emmet generates the code inside VS Code.
- Emmet is a set of plug-ins for vs code which allows high speed coding and editing in HTML.

# Difference between library and Framework?

- A framework is a pre-written code that provides a structure for developing software applications.

- A library is a collection of pre-written code that can be used to perform specific task

# What is CDN? Why do we use it?

- CDN is Content Delivery Network. It is a group of geographically distributed servers that speed up delivery of the web content by bring the content closer to where users are.

# Why is React known as React?

- React is one of many libraries and it's completely frontend and specifies in thigs that the user interacts with when they're using a website. It is called React because it reacts.

- React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data, React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components.

# What is cross-origin in the script tag?

- The cross-origin is a attribute used to share resource from one domain to another domain.

- Mainly it is used to handle CORS(Cross-Origin Resource sharing) request that checks whether it is safe to allow for sharing the resources from other domains. Resources like external scripts, links, images, videos.

# What is the difference between React and ReactDOM?

- React is a JS library for building User Interfaces and ReactDOM is the Javascript library that allows React to interact with the DOM.

# What is the difference between react.development.js and react.production.js files via CDN?

- In production mode, compression and minification of JS and other resources happens to reduce the size of the code which is not the case when it comes to development mode.

- Performance will be much more faster in production mode when compared to development mode.

# What are async and defer?

- Async allows script to run as soon as it is loaded without blocking other elements on the page. Defer means script will only execute after the page has finished loading.

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Episode 2

Question 1 : What is NPM?
Answer : NPM is a Package Manager for Node which is used manage dependencies in the project.

Question 2 : What is 'Parcel/Webpack'? Why do we need it?
Answer : Parcel/Webpack are bundlers which are used to make our code production ready. They are used to minify your code, remove unnecessary code and comments & optimise your code for different browsers and many other features which helps in smooth and efficient functioning of your app in production.

Question 3 : What is .parcel-cache?
Answer : .parcel-cache is a directory created when we execute parcel dependency in our project. Inside .parcel-cache, parcel stores information about our code when it builds it. So, that when it is rebuilt, parcel doesn't need to re-analyze everything again form scratch.

Question 4 : What is npx?
Answer : npx is used to execute a dependency in our node_modules.

Question 5 : What is difference between dependencies vs devDependencies?
Answer : dependencies are the dependencies which are required for the smooth functioning of your app. For example, if we are using React in our application we need React dependency on our production App as well for smooth functioning of our project. But devDependencies on the other hand, are only required & used for development purposes. For example, bundlers, we need bundlers during development time only to optimise our code at once & other development tools. But once, we have optimised our code using those bundlers, we don't need them for production purposes.

Question 6 : What is Tree Shaking?
Answer : Parcel removes unnecessary code & comments to minify our code. This process omission of unnecessary code for better optimisation is known as Tree Shaking.

Question 7 : What is Hot Module Replacement?
Answer : Hot Module Replacement is used for adding modifications to an application while application is still running.

Question 8 : List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
Answer : My favourite superpowers of Parcel are : -

- HMR (Hot Module Replacement)
- Tree Shaking
- Image Optimisation
- Different Bundling
- Diagnosis

Tree Shaking --> This feature of Parcel enables it to remove unused code for better code optimisation.

Different Bundling --> This feature of Parcel enables us to provide support for our App for older browsers.

Diagnosis : This features helps us to diagnose the issue with our code by directly pinpointing to the issue.

Question 9 : What is .gitignore? What should we ad and not add into it?
Ans : .gitignore is file used by git to make sure to not push unnecessary folder/files to our github repo.
We should add .parcel-cache, dist & node_modules folder into the .gitignore file as these folder are recreated when we run npm & npx commands later.

We should not add package.json and package-lock.json into the .gitignore file.

Question 10 : What is the difference between package.json and package-lock.json?
Answer : package.json contains all the dependencies and their versions required for app. We can use ^ or ~ to make download higher versions if found. But package-lock.json contains the exact information of the version which is downloaded, it also contains integrity key which helps us to maintain uniformity between dependencies' version downloaded by production build and dev build.

Question 11 : Why should I not modify package-lock.json?
Answer : package-lock.json contains important information regarding version of dependencies which are used while development build. If we make some mistake while modifying package-lock.json, there might be some mismatch between dependencies used during production and during development phase. This might cause issues later on so to prevent those issues, we should not modify package-lock.json. It will be automatically modifies when we run npm commands in development build according to the needs.

Question 12 : What is node_modules? Is it a good idea to push that on git?
Answer : node_modules is a directory where npm store all the dependencies required by the app. It is not a good idea to push this directory on git as we can easily recreate this directory later on using package.json and npm install command later on.

Question 13 : What is the dist folder?
Answer : dist folder is used by bundlers to store minified version of source code which is later used to run your application.

Question 14 : What is browserlists?
Answer : browserlists is a package used to make our code suitable for many browsers and their previous versions. This helps us to ensure that our code is working similarly for at least most of the users.

# Episode 3

# JSX

- JSX is a javascript syntax which allow us to write HTML like CODE in .js file and which create the react element.
- JSX is not HTML inside javascript.
- JSX is use to merge JS and HTML togeather.
- JSX and React both are different this, we can write react without JSX.
- JSX is syntax while React is javascript library.

React.ceateElement vs JSX?
React.createElement creates an JS object while JSX firstly create React.createElement itself and the create HTML element for rendering.

Benifits or super powers of jsx?
o-Return a single root element:
should have a parent like <div></div> or <></> frigms
o-Close all the tags:
including self-closing tags <img> --> <img/>
o-camelCase most of the thing:
HTML-> <div class="abc">
JSX-> <div className="abc">

Behind the scenes of JSX?
Behind the scenes this also create react element by babel and then convert it into HTMLELEMENT

Component?
There are two type to components:
1- Class Base Component
2- Functional component
Any function which returns JSX element or React element is known as functional component.
Componemt name should starts from capital letter.

Composing component: JSx inside JSX

const title = () =>(

<h1>title here</h1>
)

const heading = () =>(
<>
{title()} or <title/> or <title></title>

<h1>code here</h1>
</>
)

type in <script>?
it specified which type of src element will this script hold, like javascript, module etc.

{TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX ?
All of the syntax of different ways of rendering a component.
{TitleComponent}: This represents a value in the javascript. If there is a variable called TitleComponent then it will render the variable value in the page.
{<TitleComponent />}: This will return a React component in the page. There is no children passed in the parameter.
{<TitleComponent></TitleComponent>}: This is another way of rendering React component just like the self closing one. This way is used when we are supposed to provide some children in the Component as well.

Question 1 : What is NPM?
Answer : NPM is a Package Manager for Node which is used manage dependencies in the project.

Question 2 : What is 'Parcel/Webpack'? Why do we need it?
Answer : Parcel/Webpack are bundlers which are used to make our code production ready. They are used to minify your code, remove unnecessary code and comments & optimise your code for different browsers and many other features which helps in smooth and efficient functioning of your app in production.

Question 3 : What is .parcel-cache?
Answer : .parcel-cache is a directory created when we execute parcel dependency in our project. Inside .parcel-cache, parcel stores information about our code when it builds it. So, that when it is rebuilt, parcel doesn't need to re-analyze everything again form scratch.

Question 4 : What is npx?
Answer : npx is used to execute a dependency in our node_modules.

Question 5 : What is difference between dependencies vs devDependencies?
Answer : dependencies are the dependencies which are required for the smooth functioning of your app. For example, if we are using React in our application we need React dependency on our production App as well for smooth functioning of our project. But devDependencies on the other hand, are only required & used for development purposes. For example, bundlers, we need bundlers during development time only to optimise our code at once & other development tools. But once, we have optimised our code using those bundlers, we don't need them for production purposes.

Question 6 : What is Tree Shaking?
Answer : Parcel removes unnecessary code & comments to minify our code. This process omission of unnecessary code for better optimisation is known as Tree Shaking.

Question 7 : What is Hot Module Replacement?
Answer : Hot Module Replacement is used for adding modifications to an application while application is still running.

Question 8 : List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words?
Answer : My favourite superpowers of Parcel are : -

- HMR (Hot Module Replacement)
- Tree Shaking
- Image Optimisation
- Different Bundling
- Diagnosis

Tree Shaking --> This feature of Parcel enables it to remove unused code for better code optimisation.

Different Bundling --> This feature of Parcel enables us to provide support for our App for older browsers.

Diagnosis : This features helps us to diagnose the issue with our code by directly pinpointing to the issue.

Question 9 : What is .gitignore? What should we ad and not add into it?
Ans : .gitignore is file used by git to make sure to not push unnecessary folder/files to our github repo.
We should add .parcel-cache, dist & node_modules folder into the .gitignore file as these folder are recreated when we run npm & npx commands later.

We should not add package.json and package-lock.json into the .gitignore file.

Question 10 : What is the difference between package.json and package-lock.json?
Answer : package.json contains all the dependencies and their versions required for app. We can use ^ or ~ to make download higher versions if found. But package-lock.json contains the exact information of the version which is downloaded, it also contains integrity key which helps us to maintain uniformity between dependencies' version downloaded by production build and dev build.

Question 11 : Why should I not modify package-lock.json?
Answer : package-lock.json contains important information regarding version of dependencies which are used while development build. If we make some mistake while modifying package-lock.json, there might be some mismatch between dependencies used during production and during development phase. This might cause issues later on so to prevent those issues, we should not modify package-lock.json. It will be automatically modifies when we run npm commands in development build according to the needs.

Question 12 : What is node_modules? Is it a good idea to push that on git?
Answer : node_modules is a directory where npm store all the dependencies required by the app. It is not a good idea to push this directory on git as we can easily recreate this directory later on using package.json and npm install command later on.

Question 13 : What is the dist folder?
Answer : dist folder is used by bundlers to store minified version of source code which is later used to run your application.

Question 14 : What is browserlists?
Answer : browserlists is a package used to make our code suitable for many browsers and their previous versions. This helps us to ensure that our code is working similarly for at least most of the users.

# Episode 4

1. Is JSX mandatory for React ?
   Answer: No, JSX is not mandatory for React. We can create component
   without writing JSX. We can use the React.createElement as an alternative of
   JSX.
2. Is ES6 mandatory for React ?
   Answer: No, ES6 is not mandatory for React. We can use the older JS version
   and concepts like function keywords and others to write code for React.
3. {TitleComponent} vs {<TitleComponent />} vs
   {<TitleComponent></TitleComponent>} in JSX ?
   Answer:
    All of the syntaxes above represents differnt ways of rendering a
   component.
    {TitleComponent}: This represents a value in the javascript. If there is
   a variable called TitleComponent then it will render the variable value in
   the page.
    {<TitleComponent />}: This will return a React component in the page.
   There is no children passed in the parameter.
    {<TitleComponent></TitleComponent>}: This is another way of
   rendering React component just like the self closing one. This way is
   used when we are supposed to provide some children in the Component
   as wel
4. How can I write Comments in JSX ?
   Answer: To write comments in JSX we can use {} in between the JSX and
   write comments like we do normally in Javascript by using // or /\* \*/
5. What is <React.Fragment></React.Fragment> or <></> ?
   Answer: React.Fragment or <></> is generally used to wrap the elements.
   React only allows to return only one component. So if we want to return multiple
   components then we use Fragment to wrap those elements. IT is better to use
   Fragments instead of div because fragments doesn’t add another node in
   node.
6. What is Virtual DOM ?
   Answer: Virtual DOM is a lightweight copy of an actual DOM. It is used by react
   to optimize the performance of the app by only changing the nodes which are
   necessary in actual DOM instead of rerendering the whole DOM.
7. What is Reconciliation in React ?
   Answer: Reconciliation is the process of calculating the minimum set of
   changes required to update the Actual DOM from the previous state and making
   the changes to update the DOM. Reconciliation is the process by which React
   updates the UI to reflect changes in the component state. The reconciliation
   algorithm is the set of rules that React uses to determine how to update the UI
   in the most efficient way possible.
8. What is React Fiber ?
   Answer: Fiber Reconciler is the new reconciliation algorithm in React. It is
   designed to enhance rendering performance and support concurrent updates.
   It breaks down the rendering process into smaller units (fibers) allowing
   interruption and prioritization of tasks. This enables React to efficiently manage
   component updates, handle asynchronous tasks without blocking the main
   thread, and improve user interface responsiveness, leading to smoother user
   experiences, especially in complex or dynamic applications.
9. Why do we need keys in React ? When do we need keys in React ?
   Answer: We need keys in React so that React can identify the individual
   elements in the DOM. Whenever there is any change the in nodes like if any
   node is inserted, deleted or modified, React can identify the individual
   node/nodes from the keys and make minimal and efficient changes in the DOM.
   So adding keys increases the performance of React rendering so it is
   recommended to give keys to all the elements.
10. Can we use index as keys in React ?
    Answer: It is not recommended to use index as keys in React but we can use
    the index as keys. The issue with it is that if we give index as keys then the
    performance of the app may suffer. So even though we can use index as keys
    but it is not recommended to do so.
11. What are props in React?
    Answer: Props are the variable of functions which we pass from a parent to a
    child component in React. Props are the means of passing data from one
    component to another.
12. What is a config driven UI?
    Answer: Config driven UI means that we are controlling our UI based on the data
    which might come from backend APIs or somewhere else. So we render component
    based on the config data.

Header

- Logo
- Nav Items
  Body
- Search
- RestaurantContainer
- RestaurantCard
  Footer
- CopyRight
- Links
- Address
- Contact

-Default Export/Import
export default components
import component from "path";

-Named Export/Import
export const components =
import {component} from "path";

# Episode 5 - Let's get Hooked

# Episode 05 - Let's get Hooked

### Q/ What is the difference between Named export, Default export and \* as export

A/ **Default export**

```
const Component = () => {...}
export default Component

import Component from 'relativePath'
```

We often use this type of export when we want to export a single function

**Named Export**

```
export const Component = () => {...}

import { Component } from 'relativePath'
```

We use named export to export multiple functions as one module can only contain single default export

**(\*) as export**

```
export const Component = () => {...}
export const var = 12
export function randomFunction(){...}

import * as myModule from 'realtivePath'

console.log(mymodule.var) // 12
myModule.Compoenent();
myModule.randomFunction();
```

When we export a number of functions from a module and then we
want to import all of them in a single line then we use \* for
that. Although we need to use dot notation in order to use them.

### Q/ What is the importance of config.js file?

A/ We should try to never keep hard coded data into
components as best practices and in order to keep our code clean.

We often keep these sort of data in another files and the most

commonly used names for those files are
constant.js/utils.js/config.js/common.js.

### Q/ What are React Hooks?

A/ React Hooks are utilities provided by react. These are simple JavaScript Functions.

useState and useEffect are most commonly used react hooks. They let us manage the stateful logic and side effect logic very easily.

### Q/ Why do we need a useState Hook?

A/ We often need to track some variable in our code, which means these variables change state and we need to manage their state.

useState() hook does exactly that. It manages the states of stateful variables.

# Microservices vs. Monolith Architecture and the useEffect Hook

This README provides a brief overview of Microservice and Monolith Architectures, as well as an explanation of the `useEffect` hook in React.

## Microservice Architecture

Microservice is a design approach where services are created to perform specific functionalities within an application. In Microservice architecture:

- Different microservices are developed to provide distinct functionalities.
- Microservices are loosely connected and can interact with each other.
- Each microservice can have its own technology stack.

## Monolith Architecture

Monolith architecture is the traditional approach where all services are built within the same project. In Monolith architecture:

- All modules for different services are written within a single project.
- The project encompasses logic for database connections, authentication, user interfaces, backend operations, and more.
- Deploying a monolith project typically involves compiling and building the entire codebase.

## Differences between Microservice and Monolith Architecture

Here are the key distinctions between Microservice and Monolith Architectures:

- **Structure**: Monolith architecture combines all modules within the same project, while Microservice architecture employs different microservices for different functionalities.
- **Technology Stack**: Monolith architecture utilizes a single technology stack for the entire project, whereas Microservice architecture can incorporate various tech stacks for different services.
- **Coupling**: In Monolith Architecture, components are tightly coupled, meaning they are highly interconnected. In contrast, Microservice architecture promotes loose coupling, where services have minimal dependencies on one another.
- **Deployment**: Deploying Monolith Architecture projects often requires deploying the entire project at once, which can be challenging. Microservice architecture allows individual services to be deployed separately.

## The `useEffect` Hook

In React functional components, the `useEffect` hook plays a crucial role:

- After rendering the initial UI or a placeholder UI (e.g., a loading spinner), the `useEffect` hook is used to perform tasks like making API calls or running functions when certain variables change.
- It helps ensure that the component re-renders based on the values of specified dependencies.
- The `useEffect` hook is essential for keeping the UI up-to-date with the values present in the component.

In summary, understanding the differences between Microservice and Monolith Architectures is vital for choosing the right architectural approach for your project. Additionally, the `useEffect` hook in React is a powerful tool for managing side effects and keeping your UI responsive to changes in data or dependencies.

Feel free to explore more resources and documentation for in-depth knowledge on these topics.

## Optional Chaining

Optional chaining is a feature in JavaScript that allows you to safely access nested properties of an object without causing an error if any part of the chain is null or undefined. It uses the `?.` syntax to check each property along the chain before attempting to access it. If any part of the chain is not valid, the expression returns `undefined` instead of throwing an error.

## Shimmer UI

Shimmer UI is a user interface technique used as a placeholder when data is being loaded or fetched in an application. Instead of displaying a traditional loading spinner or a blank screen, Shimmer UI enhances the user experience by showing a placeholder UI. This gives users the impression that the app is loading faster.

## Difference Between JS Expression and JS Statement

### JS Expression:

A JavaScript expression is an operation that returns a value. It can be a function call, an operator combination, or other constructs.

Examples of JavaScript expressions:

- `2 + 3` (Arithmetic expression)
- `x * 5` (Variable and arithmetic expression)
- `Math.sqrt(9)` (Function call expression)
- `"Hello, " + name` (String concatenation expression)

### JS Statement:

A JavaScript statement is a complete instruction in JavaScript that performs a specific task or action. Statements are used to control the flow of a program, manipulate data, and define behavior. They don't necessarily produce a value but execute an operation.

Examples of JavaScript statements:

- `let x = 10;` (Variable declaration and assignment statement)
- `if (x > 5) { ... } else { ... }` (Conditional statement)
- `for (let i = 0; i < 5; i++) { ... }` (Loop statement)
- `function greet(name) { ... }` (Function declaration statement)

# Project Name

Description of your project goes here.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Conditional Rendering](#conditional-rendering)
- [CORS (Cross-Origin Resource Sharing)](#cors-cross-origin-resource-sharing)

## Installation

Provide instructions on how to install and set up your project here.

## Usage

Explain how to use your project or provide code examples and usage scenarios.

## Conditional Rendering

Conditional rendering is the process of displaying different content in a web application based on certain conditions. In a React application, you can use conditional rendering to control what is displayed to the user.

# CORS (Cross-Origin Resource Sharing)

CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that controls and restricts web pages from making requests to domains other than the one that served the web page. It works through HTTP headers:

1. **Same-Origin Policy:** Browsers normally block requests to different domains for security.

2. **CORS Headers:** Servers can include specific headers in their responses to allow or deny cross-origin requests:

   - `Access-Control-Allow-Origin`: Specifies which origins are allowed.
   - `Access-Control-Allow-Methods`: Lists allowed HTTP methods.
   - `Access-Control-Allow-Headers`: Lists allowed headers.
   - `Access-Control-Allow-Credentials`: Determines if credentials (e.g., cookies) can be sent.
   - `Access-Control-Expose-Headers`: Lists headers that can be exposed.

Browser Enforcement: The browser checks these headers, allowing or blocking requests based on the server's settings. In a nutshell, CORS is a security measure that enables safe cross-origin data sharing for web applications while protecting against potential threats.

# `async` and `await`

`async` and `await` are keywords used in JavaScript for performing asynchronous tasks. You can make any function asynchronous by using the `async` keyword. When you want to wait for some asynchronous operation to complete and pause the program's execution until that operation finishes, you can use the `await` keyword. `await` will wait for the asynchronous operation to finish in the async function.

Here's an example of using `async` and `await` to fetch data:

```javascript
const fetchData = async () => {
  const response = await fetch(API);
  const jsonResponse = await response.json();
  return jsonResponse;
};
```

# Assignment 7 - Finding the Path

## Adding Images to Your App

There are two common ways to add images in a React app:

### Using CDN Links

You can store the CDN URL and provide different IDs in the `img` tag to render the image.

```jsx
import { CDN_URL } from "../utils/consts";

<img
 alt="restaurant Logo"
 src={CDN_URL + cloudinaryImageId}
 className="res-logo"
/>
Importing Local Images
You can directly import images stored in your local project.

jsx
Copy code
import { Logo } from "../utils/img/Logo.png";

<img
 alt="restaurant Logo"
 src={Logo}
 className="res-logo"
/>
Using console.log(useState())
When you do console.log(useState()), it returns an array with two elements. The first element is undefined if you haven't provided a default value, and the second element is the function for changing the value of the state variable.

useEffect without a Dependency Array
If you don't provide a dependency array in useEffect, it will execute the callback function on every re-render, which might not be the desired behavior.

Single Page Application (SPA)
SPA stands for Single Page Application. It's a web application that renders different components based on the URL. SPAs change the displayed component without refreshing the entire page when the URL changes, unlike traditional websites.

Client-Side Routing vs. Server-Side Routing
Server-Side Routing
Server-side routing involves fetching the webpage from the server for a particular URL when a request is made. It then replaces the currently displayed webpage with the newly fetched one.

Client-Side Routing
Client-side routing sends minimal code in the initial request and expands it to render different components based on the URL. Single Page Applications (SPAs) primarily use client-side routing. In client-side routing, a router library navigates the user to a new page without sending a request to the backend.
```

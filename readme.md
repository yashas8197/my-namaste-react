# Namaste React 🚀

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

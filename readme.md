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

import React from 'react';

const Bloges = () => {
    return (
        <div className='my-10'>
            <div className='w-96 mx-auto grid grid-rows-4 grid-flow-col gap-4'>
            <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application
  </div>
  <div className="collapse-content"> 
    <p>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.URL:We can use URL to store some data e.g.The id of the current item, being viewed,Filter parameters,Pagination offset and limit,Sorting data.Keeping such data in the URL allows users to share deep links with others.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc.The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. </p>
  </div>
</div>

<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div className="collapse-content"> 
    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
  </div>
</div>

<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  What is a unit test? Why should we write unit tests?
  </div>
  <div className="collapse-content"> 
    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."<br/>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</p>
  </div>
</div>

<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  React vs. Angular vs. Vue?
  </div>
  <div className="collapse-content"> 
    <p>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.
    React:Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native
    Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
  </div>
</div>

            </div>
        </div>
    );
};

export default Bloges;
import React from 'react';
import { CodewarsLink, Leaderboard } from './MyComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

// createElement function
function createElement(content, tag = 'div', properties = {}) {
  return React.createElement(tag, properties, content);
}

// createUnorderedList function
function createUnorderedList(list) {
  return React.createElement(
    'ul',
    { className: "list-group list-group-flush bg-light rounded shadow-sm mt-4" },
    list.map((item, index) =>
      React.createElement('li', { key: index, className: "list-group-item text-center text-dark" }, item)
    )
  );
}

// Example usages of the functions
const customTag = createElement('Hello World', 'h1', { className: "text-center display-6 text-primary my-4" });
const fruits = createUnorderedList(['apples', 'oranges', 'bananas']);

// Render the elements to the DOM
export default function App() {
  const leaders = ['Sch3lp', 'nplus', 'OverZealous', 'GiacomoSorbi', 'ZozoFouchtra'];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-secondary">
      <Leaderboard leaders={leaders} />
      <div className="container text-center mt-5">
        {customTag}
        {fruits}
      </div>
    </div>
  );
}

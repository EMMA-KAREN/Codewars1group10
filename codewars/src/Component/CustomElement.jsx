// Import React library and Bootstrap CSS for styling
import React from 'react';


// Main component that displays a custom element and an unordered list
function CustomElements() {
  // Creates a styled element with the text "Hello, world!"
  const myElement = createElement('Hello, world!', 'div', { className: 'alert alert-primary text-center' });
  
  // Creates a styled unordered list with items
  const myList = createUnorderedList(['apple', 'banana', 'cherry']);

  return (
    <div className="container mt-4">
      {myElement}
      {myList}
    </div>
  );
}

// Helper function to create a custom element with specified content, tag, and properties
function createElement(content, tag = 'div', properties = {}) {
  return React.createElement(tag, properties, content);
}

// Helper function to create a styled unordered list
function createUnorderedList(list) {
  return React.createElement(
    'ul',
    { className: 'list-group my-3' },
    list.map((item, index) =>
      React.createElement('li', { key: index, className: 'list-group-item' }, item)
    )
  );
}

export default CustomElements;

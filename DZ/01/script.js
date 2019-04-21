

/*  const React = {
  createElement:({ isPair = true, ...props})=>{
    return (
      isPair ? 
      `<${props.component} style="${props.style}">${props.content}</${props.component}>` 
      : 
      `<${props.component}>`
      )
  },
  render: (app, root) => root.innerHTML = app
}
const app = React.createElement({component: 'div', style: "background-color: red",  content: [
  React.createElement({component: 'span', content: 'Hello World'}),
  React.createElement({component: 'br', isPair: false}),
  "I am just a text node",
  React.createElement({component: 'div', content: 'Text content'}),
  React.createElement({component: 'h1', style: "color: green; text-align: center", content: 'HEllO, APIKO'})
].join('')
});
React.render(
  app,
 document.getElementById('root')
); */


const str = ['sadsad', 'sad', 12, 'gf']
console.log(str+'\n')
const newStr = str.slice(-3).reverse()
console.log(newStr)

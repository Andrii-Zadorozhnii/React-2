// ReactDOM.render(React.createElement('input', {
//     placeholder: "Hello",
//     value: "Hello",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over"),
// }), document.getElementById("app"))
const inputClick = () => console("Clicked")
const mouseOver = () => console("Mouse Over")
const helpText = "Help text!"

const elements = (
    <div>
        <h1>{helpText}</h1>
        <input placeholder="Hello text" onClick={inputClick} onMouseEnter={mouseOver}/>
    </div>
)
const app = document.getElementById("app")

ReactDOM.render(elements , app)
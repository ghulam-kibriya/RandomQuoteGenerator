import quotes from "./quotes.js"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      index: Math.floor(Math.random()*quotes.length)
    }
    this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({index:Math.floor(Math.random()*quotes.length)})
  }
  render() {
    const generateTweet = () => quotes[this.state.index]["quote"].replace(" ","%20")
    return (
      <div>
        <Quote 
          quote={quotes[this.state.index]["quote"]}
          author = {quotes[this.state.index]["author"]}
          />
        <button variant = "primary" id="new-quote" onClick={() => this.handleChange()}>Click Me</button><br/>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${generateTweet()}`}>Tweet<i class="glyphicon glyphicon-twitter"/></a>  
      </div>
    )
  }
}

function Quote(props) {
  return(
    <div>
      <h1 id="text">&#8220;{props.quote}</h1>
      <h4 id="author">--{props.author}</h4>
    </div>
  )
}


ReactDOM.render(<App />,document.getElementById("quote-box"))


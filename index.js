class App extends React.Component {
  constructor() {
    super()
    this.state = {
        quote:"",
        author:"",
        allQuotes:[]
    }
  }
  componentDidMount() {
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            this.setState({allQuotes:data})
            const randomIdx= Math.floor(Math.random()*this.state.allQuotes.length)
            const { text, author } = this.state.allQuotes[randomIdx]
            this.setState({
                quote:text,
                author:author
            })
        })
  }
  
  handleChange = () => {
    const randomIdx= Math.floor(Math.random()*this.state.allQuotes.length)
        const { text, author } = this.state.allQuotes[randomIdx]
        this.setState({
            quote:text,
            author:author
        })   
    }
  render() {
    const generateTweet = () => this.state.quote.replace(" ","%20")
    return (
      <div>
        <Quote 
          quote={this.state.quote}
          author = {this.state.author}
          />
        <button id="new-quote" onClick={() => this.handleChange()}>Click Me</button><br/>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${generateTweet()}`}>Tweet</a>  
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


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
    const generateTweet = () => {
      const date = new Date()
      console.log(date.getDay())
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      const text = `\n#${days[date.getDay()]}Inspiration`
      const twitterHref = `https://twitter.com/intent/tweet?text=${escape(this.state.quote)}${escape(text)}`
      return twitterHref
    }
    return (
      <div>
        <Quote 
          quote={this.state.quote}
          author = {this.state.author}
          />
        <button id="new-quote" onClick={() => this.handleChange()}>Click Me</button><br/>
        <a id="tweet-quote" href={generateTweet()}>Tweet</a>  
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


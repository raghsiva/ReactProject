import React from 'react';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: 'cartoon books', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
        { title: 'cartoon books', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
        { title: 'cartoon books', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
        { title: 'cartoon books', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
        { title: 'cartoon books', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
      ],
      temp_title: '',
      temp_content: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (event) => {
    let current = this.state.posts.slice();
    current.push({ title: this.state.temp_title, content: this.state.temp_content})
    this.setState({
      posts: current,
      temp_title: '',
      temp_content: ''
    })
    event.preventDefault();
  }

  render() {

    let list = this.state.posts.map(
      i => {

        return <div className="container">
          <hr />
          <div className="card">
            <div class="row">
              <div className="column left" >
            
              </div>
              <div className="column right" >
                <h3> {i.title}</h3>
                {i.content}<br /> <br /> <br />
                <button class="btn btn-outline-primary" >Open Discussion</button>&nbsp;&nbsp;
              </div>
            </div>
          </div>

          <br />
        </div>

      }
    );
    return (
      <div>
        <div className="container">
          <button class="btn btn-outline-primary">Add</button></div>

        <form onSubmit={this.handleSubmit}>
          Discussion Title: <input type="text" name="temp_title" value={this.state.temp_title} onChange={this.handleChange} /><br /><br />
          Content: <textarea name="temp_content" value={this.state.temp_content} onChange={this.handleChange} /><br /><br />
          <input type="submit" value="post" />
        </form>
        {list}
      </div>
    )
  }
}
export default Dashboard; 
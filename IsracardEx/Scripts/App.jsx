//import CommentList from "./CommentList";

class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            inputValue: ''
        };

        this.getRepos = this.getRepos.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.fetchAPI = this.fetchAPI.bind(this);
        this.addBookmark = this.addBookmark.bind(this);
        
    }

    fetchAPI = (param) => {
        fetch("https://api.github.com/search/repositories?q=" + param)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    repos: result
                });
                    console.log(this.state)
                },
                (error) => {
                    console.log(error)
                });
    }


    getRepos = (e) => {
        e.preventDefault();
        this.fetchAPI(this.state.inputValue);
        console.log('The link was clicked.');
    }

    addBookmark= function(id,img,fullName, event){
        console.log(id, img, fullName);
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url:"Home/saveBookmark",
            data: JSON.stringify({ 'repoId': id, 'avatar': img, 'repoName': fullName}),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (responce)
            {
                alert(responce.Message)
            },
            error: function ()
            {
                alert("Error while saving bookmark. :/");
            }
        });  
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    keyPress(e) {
        if (e.keyCode == 13) {
            console.log('input value is : ', e.target.value);
            this.fetchAPI(e.target.value)
        }
    }



    render()
    {
        return (
            <div>
            <section className="jumbotron">
                <div className="container">
                    <p className="lead">
                        Type the repository you would like to search, Press the Search button or use the Enter key.
                    </p>
                    <div className="input-group input-group-lg">
                        <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.keyPress} className="form-control"/>
                    </div>
                    <div >
                        <br/>
                        <p>
                            <a href="#" onClick={this.getRepos} className="btn btn-primary">Search</a>
                        </p>
                    </div>
                </div>
            </section>

            <div className="search-result">
             {
                    Object.keys(this.state.repos) != 0
                            ?
                            <ul>
                                {
                                    this.state.repos.total_count != 0 ?
                                        Object.keys(this.state.repos.items).map((key) => (
                                            <li key={this.state.repos.items[key].id}>
                                                <div className="parent">
                                                    <p className="repoAuther" val = {this.state.repos.items[key].id}> Full Repository Name:  {this.state.repos.items[key].full_name} </p>
                                                    <hr/>
                                                    <div className="left">
                                                        <img src={this.state.repos.items[key]["owner"].avatar_url} alt='avatarUrl' className='avaImg'/>
                                                    </div>
                                                
                                                    <div className="middle">
                                                        <a href="#"
                                                            className="btn btn-success btn-lg"
                                                            onClick={this.addBookmark.bind(this, this.state.repos.items[key].id, 
                                                                     this.state.repos.items[key]["owner"].avatar_url,
                                                                     this.state.repos.items[key].full_name)
                                                                     }>Add Page to Bookmark</a>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                        :
                                        <div className="parent">
                                            <p className="repoAuther"> There is no existing repositories :/ </p>
                                        </div>
                                  }
                            </ul>
                            :
                            <div>
                                <hr />
                                <p>&copy; Isracard Home Exercise</p>
                            </div>
    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('content'));
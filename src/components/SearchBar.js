import React from "react";

class SearchBar extends React.Component {
    onInputChange(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="ui segment">
                <form action="POST" className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
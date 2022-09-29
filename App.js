import React, {pureComponent} from "React";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

export default class App extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            filteredEmoji: filteredEmoji("",20)
        };
    }

    handleSearchChange = event => {
        this.setState({
            filteredEmoji: filterEmoji(event.target.value, 20)
        });
    };

    render(){
        return(
            <div>
                <header />
                <SearchInput textChange={this.handleSearchChange}/>
                <EmojiResults emojiData={this.state.filteredEmoji} />
                </div>
        );
    }
}
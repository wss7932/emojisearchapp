import emojiList from "./emojiList";

export default function filterEmoji(searchText, maxResults){
    return emojiList
    .filter(emoji => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())){
            return true;
        }
        if (emoni.keywords.includes(searchText)){
            return true;
        }
        return false;
    })
    .slice(0, maxResults);
}
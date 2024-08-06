export default function Search() {
    function search(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get("query");
        const text = formData.get("text");
        alert(`You searched for '${query}'--'${text}'`);
    }

    return (
        <form onSubmit={search}>
            <input name="query" />
            <input type="text" />
            <button type="submit">Search</button>
        </form>
    );
}
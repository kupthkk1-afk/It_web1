export default function ProductForm() {
    return (
        <div>
            <h1> Store Category</h1>
            <form>
                <input type="text" name="name" />     <br/>
                <textarea name="Description" placeholder="Enter Your Description"></textarea>
                <button>SaveData</button>
            </form>
        </div>
    );
}
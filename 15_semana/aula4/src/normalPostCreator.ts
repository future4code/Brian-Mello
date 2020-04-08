import { PostCreator } from "./postCreator";
import { Post } from "./post";
import { FileManager } from "./FileManager";
import { ErrorPrinter } from "./errorPrinter";


export class NormalPostCreator implements PostCreator{


    createPost(author: string, postText: string): void{
        this.validateInput(author,postText)
        this.savePost(new Post(author,postText, new Date()))
        console.log("O post foi criado com sucesso")
    }

    protected savePost(post: Post){
        const fileManager = new FileManager("postList.json")
        const data = fileManager.readFile();
        data.posts.push(post);
        fileManager.writeFile(data)
    }

    protected validateInput(author: string, postText: string) {
        if(!author || !postText){
            throw new ErrorPrinter("deu erro", new Date())
        }
    }
}
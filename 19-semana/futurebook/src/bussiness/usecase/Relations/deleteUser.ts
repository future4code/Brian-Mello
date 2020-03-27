import { RelationGateway } from "../../gateways/relationsGateway";

export class DeleteUserUC{
    constructor(
        private relationGateway: RelationGateway
    ){}
    
    public async execute(input: DeleteUserUCInput): Promise<DeleteUserUCOutput>{

        const user = await this.relationGateway.getUsersRelationsData(input.adderFriendId, input.friendAddedId)

        if(!user){
            throw new Error("You are not friends!")
        }

        await this.relationGateway.unfollowUserRelation(input.adderFriendId, input.friendAddedId)

        return{
            message: "Friendship ended successfully"
        }
    }

}

export interface DeleteUserUCInput{
    adderFriendId: string;
    friendAddedId: string;
}

export interface DeleteUserUCOutput{
    message: string
}
import { RelationGateway } from "../../gateways/relationsGateway";

export class AddUserUC{
    constructor(
        private relationGateway: RelationGateway
    ){}
    
    public async execute(input: AddFriendUCInput): Promise<AddFriendUCOutput>{

        const user = await this.relationGateway.getUsersRelationsData(input.adderFriendId, input.friendAddedId)

        if(user){
            throw new Error("You are already friends!")
        }

        await this.relationGateway.addUserRelation(input.adderFriendId, input.friendAddedId)

        return{
            message: "User Added Successfully"
        }
    }

}

export interface AddFriendUCInput{
    adderFriendId: string;
    friendAddedId: string;
}

export interface AddFriendUCOutput{
    message: string
}
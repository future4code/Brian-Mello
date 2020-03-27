import { RelationGateway } from "../../gateways/relationsGateway";

export class UnfollowUserUC{
    constructor(
        private relationGateway: RelationGateway
    ){}
    
    public async execute(input: UnfollowUserUCInput): Promise<UnfollowUserUCOutput>{

        const user = await this.relationGateway.getUsersRelationsData(input.adderFriendId, input.friendAddedId)

        if(!user){
            throw new Error("You don't follow this user!")
        }

        await this.relationGateway.unfollowUserRelation(input.adderFriendId, input.friendAddedId)

        return{
            message: "User Unfollowed Successfully"
        }
    }

}

export interface UnfollowUserUCInput{
    adderFriendId: string;
    friendAddedId: string;
}

export interface UnfollowUserUCOutput{
    message: string
}
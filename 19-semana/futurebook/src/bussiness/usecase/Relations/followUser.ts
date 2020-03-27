import { RelationGateway } from "../../gateways/relationsGateway";

export class FollowUserUC{
    constructor(
        private relationGateway: RelationGateway
    ){}
    
    public async execute(input: FollowUserUCInput): Promise<FollowUserUCOutput>{

        const user = await this.relationGateway.getUsersRelationsData(input.adderFriendId, input.friendAddedId)

        if(user){
            throw new Error("This user are already followed by you!")
        }

        await this.relationGateway.followUserRelation(input.adderFriendId, input.friendAddedId)

        return{
            message: "User Followed Successfully"
        }
    }

}

export interface FollowUserUCInput{
    adderFriendId: string;
    friendAddedId: string;
}

export interface FollowUserUCOutput{
    message: string
}
import {IsNotEmpty, IsUUID, Length} from 'class-validator'


export class CreateNotificationBody{ 

    @IsNotEmpty() //decorator para validação de campo que não pode estar vazio
    @IsUUID() //decorator para que seja obrigatorio um UUID
    recipientId: string;

    @IsNotEmpty()
    @Length(4, 240) 
    content: string;

    @IsNotEmpty()
    category: string;
}
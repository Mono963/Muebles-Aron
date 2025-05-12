import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, Length, IsString, IsInt } from "class-validator";


@Entity({
    name: "formdata"
})

export class Form {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100})
    @Length(1, 100)
    @IsString()
    name: string;

    @Column({
        name: "last_name",
        length: 100
    })
    @Length(1, 100)
    @IsString()
    lastName: string;

    @Column({
        length: 100,
        unique: true
    })
    @IsEmail()
    @Length(5, 100)
    email: string;

    @Column({ type: "bigint" })
    @IsInt()
    phoneNumber: number;

    @Column({ type: "text"})
    @Length(0, 1000)
    @IsString()
    details: string;

}
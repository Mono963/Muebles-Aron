import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "formdata"
})

export class Form {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    lastname: string;

    @Column({
        length: 100,
        unique: true
    })
    email: string;

    @Column({
        type: "int",
        unique: true
    })
    phoneNumber: number;

    @Column({
        length: 100
    })
    details: string;

}
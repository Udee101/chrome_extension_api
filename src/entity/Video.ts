import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Video {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    video_url: string

    @CreateDateColumn()
    created_at: Date

}

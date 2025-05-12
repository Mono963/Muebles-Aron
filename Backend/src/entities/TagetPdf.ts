import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "target_pdf" })
export class TargetPdf {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column( {
    length: 100,
    unique: true
  })
  title: string;

  @Column({ 
    name: "image_url",
    unique: true
  })
  imageUrl: string;

  @Column({ 
    name: "pdf_url",
    unique: true
  })
  pdfUrl: string;
}
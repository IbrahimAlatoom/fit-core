/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class WorkUnit extends Document {
    @Prop({ required: true })
    name: string;

    // Array of Employee IDs
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }] })
    employees: mongoose.Schema.Types.ObjectId[];

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sector' })
    // sectorId: mongoose.Schema.Types.ObjectId; // Link to the sector overseeing this unit

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Manager' })
    // managerId: mongoose.Schema.Types.ObjectId; // Manager overseeing the work unit
}

export const WorkUnitSchema = SchemaFactory.createForClass(WorkUnit);

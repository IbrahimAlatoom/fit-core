/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { EmployeeSettings } from "./EmployeeSettings.schema";
// import mongoose from "mongoose";

@Schema()
export class Employee {
    @Prop({ unique: true, required: true })
    employeeId: string; // Unique employee ID

    @Prop({ required: true })
    firstname: string; // Employee firstname

    @Prop({ required: true })
    lastname: string; // Employee lastname

    @Prop({ unique: true, required: true })
    email: string; // Work email address

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'EmployeeSettings' })
    settings?: mongoose.Schema.Types.ObjectId;
    // @Prop({ required: true })
    // phoneNumber: string; // Contact number

    // @Prop({ required: true })
    // jobTitle: string; // Employee's job title

    // @Prop({ required: true })
    // hireDate: Date; // Date the employee was hired

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'WorkUnit' })
    workUnitId: mongoose.Schema.Types.ObjectId; // Link to the work unit

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Manager' })
    // managerId: mongoose.Schema.Types.ObjectId; // Employee's direct manager

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
    // departmentId: mongoose.Schema.Types.ObjectId; // Department employee belongs to

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Executive' })
    // executiveId: mongoose.Schema.Types.ObjectId; // Executive overseeing the department
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

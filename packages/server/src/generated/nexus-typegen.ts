/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  StartRunInput: { // input type
    testFileIds?: string[] | null; // [String!]
  }
}

export interface NexusGenEnums {
  Status: "error" | "idle" | "in_progress" | "success"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Run: { // root type
    id: string; // ID!
    progress: number; // Float!
    status: NexusGenEnums['Status']; // Status!
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
  }
  Subscription: {};
  TestFile: { // root type
    id?: string | null; // ID
    relativePath?: string | null; // String
    status?: NexusGenEnums['Status'] | null; // Status
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    startRun: NexusGenRootTypes['Run']; // Run!
  }
  Query: { // field return type
    run: NexusGenRootTypes['Run'] | null; // Run
    runs: NexusGenRootTypes['Run'][]; // [Run!]!
    testFile: NexusGenRootTypes['TestFile'] | null; // TestFile
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
  }
  Run: { // field return type
    id: string; // ID!
    progress: number; // Float!
    status: NexusGenEnums['Status']; // Status!
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
  }
  Subscription: { // field return type
    runAdded: NexusGenRootTypes['TestFile']; // TestFile!
    runRemoved: NexusGenRootTypes['TestFile']; // TestFile!
    runUpdated: NexusGenRootTypes['TestFile']; // TestFile!
    testFileAdded: NexusGenRootTypes['TestFile']; // TestFile!
    testFileRemoved: NexusGenRootTypes['TestFile']; // TestFile!
    testFileUpdated: NexusGenRootTypes['TestFile']; // TestFile!
  }
  TestFile: { // field return type
    id: string | null; // ID
    relativePath: string | null; // String
    status: NexusGenEnums['Status'] | null; // Status
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    startRun: 'Run'
  }
  Query: { // field return type name
    run: 'Run'
    runs: 'Run'
    testFile: 'TestFile'
    testFiles: 'TestFile'
  }
  Run: { // field return type name
    id: 'ID'
    progress: 'Float'
    status: 'Status'
    testFiles: 'TestFile'
  }
  Subscription: { // field return type name
    runAdded: 'TestFile'
    runRemoved: 'TestFile'
    runUpdated: 'TestFile'
    testFileAdded: 'TestFile'
    testFileRemoved: 'TestFile'
    testFileUpdated: 'TestFile'
  }
  TestFile: { // field return type name
    id: 'ID'
    relativePath: 'String'
    status: 'Status'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    startRun: { // args
      input: NexusGenInputs['StartRunInput']; // StartRunInput!
    }
  }
  Query: {
    run: { // args
      id: string; // ID!
    }
    testFile: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
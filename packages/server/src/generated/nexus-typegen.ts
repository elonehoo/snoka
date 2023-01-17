/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context"
import { TestSuiteData } from "./../schema/TestSuite"
import { RunData } from "./../schema/Run"
import { RunTestFileData } from "./../schema/RunTestFile"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ClearRunInput: { // input type
    id: string; // ID!
  }
  StartRunInput: { // input type
    testFileIds?: string[] | null; // [String!]
  }
}

export interface NexusGenEnums {
  Status: "error" | "idle" | "in_progress" | "skipped" | "success"
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
  Run: RunData;
  RunTestFile: RunTestFileData;
  RunTestFileError: { // root type
    message: string; // String!
  }
  Subscription: {};
  Test: { // root type
    duration?: number | null; // Int
    error?: NexusGenRootTypes['TestError'] | null; // TestError
    id: string; // ID!
    status: NexusGenEnums['Status']; // Status!
    title: string; // String!
  }
  TestError: { // root type
    col?: number | null; // Int
    line?: number | null; // Int
    message: string; // String!
    snippet?: string | null; // String
    stack?: string | null; // String
  }
  TestFile: { // root type
    deleted: boolean; // Boolean!
    duration?: number | null; // Int
    id: string; // ID!
    relativePath: string; // String!
    status: NexusGenEnums['Status']; // Status!
  }
  TestSuite: TestSuiteData;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    clearRun: NexusGenRootTypes['Run']; // Run!
    clearRuns: boolean; // Boolean!
    openTestFileInEditor: boolean | null; // Boolean
    startRun: NexusGenRootTypes['Run']; // Run!
  }
  Query: { // field return type
    lastRun: NexusGenRootTypes['Run'] | null; // Run
    run: NexusGenRootTypes['Run'] | null; // Run
    runs: NexusGenRootTypes['Run'][]; // [Run!]!
    testFile: NexusGenRootTypes['TestFile'] | null; // TestFile
    testFiles: NexusGenRootTypes['TestFile'][]; // [TestFile!]!
  }
  Run: { // field return type
    duration: number | null; // Int
    emoji: string; // String!
    id: string; // ID!
    progress: number; // Float!
    runTestFile: NexusGenRootTypes['RunTestFile'] | null; // RunTestFile
    runTestFiles: NexusGenRootTypes['RunTestFile'][]; // [RunTestFile!]!
    status: NexusGenEnums['Status']; // Status!
    testSuites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    title: string; // String!
  }
  RunTestFile: { // field return type
    buildDuration: number | null; // Int
    duration: number | null; // Int
    error: NexusGenRootTypes['RunTestFileError'] | null; // RunTestFileError
    id: string; // ID!
    slug: string; // String!
    status: NexusGenEnums['Status']; // Status!
    suites: NexusGenRootTypes['TestSuite'][]; // [TestSuite!]!
    testFile: NexusGenRootTypes['TestFile']; // TestFile!
  }
  RunTestFileError: { // field return type
    message: string; // String!
  }
  Subscription: { // field return type
    runAdded: NexusGenRootTypes['Run']; // Run!
    runRemoved: NexusGenRootTypes['Run']; // Run!
    runTestFileUpdated: NexusGenRootTypes['RunTestFile']; // RunTestFile!
    runUpdated: NexusGenRootTypes['Run']; // Run!
    testAdded: NexusGenRootTypes['Test']; // Test!
    testFileAdded: NexusGenRootTypes['TestFile']; // TestFile!
    testFileRemoved: NexusGenRootTypes['TestFile']; // TestFile!
    testFileUpdated: NexusGenRootTypes['TestFile']; // TestFile!
    testSuiteAdded: NexusGenRootTypes['TestSuite']; // TestSuite!
    testSuiteUpdated: NexusGenRootTypes['TestSuite']; // TestSuite!
    testUpdated: NexusGenRootTypes['Test']; // Test!
  }
  Test: { // field return type
    duration: number | null; // Int
    error: NexusGenRootTypes['TestError'] | null; // TestError
    id: string; // ID!
    status: NexusGenEnums['Status']; // Status!
    title: string; // String!
  }
  TestError: { // field return type
    col: number | null; // Int
    line: number | null; // Int
    message: string; // String!
    snippet: string | null; // String
    stack: string | null; // String
  }
  TestFile: { // field return type
    deleted: boolean; // Boolean!
    duration: number | null; // Int
    id: string; // ID!
    relativePath: string; // String!
    status: NexusGenEnums['Status']; // Status!
  }
  TestSuite: { // field return type
    duration: number | null; // Int
    id: string; // ID!
    runTestFile: NexusGenRootTypes['RunTestFile']; // RunTestFile!
    status: NexusGenEnums['Status']; // Status!
    tests: Array<NexusGenRootTypes['Test'] | null>; // [Test]!
    title: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    clearRun: 'Run'
    clearRuns: 'Boolean'
    openTestFileInEditor: 'Boolean'
    startRun: 'Run'
  }
  Query: { // field return type name
    lastRun: 'Run'
    run: 'Run'
    runs: 'Run'
    testFile: 'TestFile'
    testFiles: 'TestFile'
  }
  Run: { // field return type name
    duration: 'Int'
    emoji: 'String'
    id: 'ID'
    progress: 'Float'
    runTestFile: 'RunTestFile'
    runTestFiles: 'RunTestFile'
    status: 'Status'
    testSuites: 'TestSuite'
    title: 'String'
  }
  RunTestFile: { // field return type name
    buildDuration: 'Int'
    duration: 'Int'
    error: 'RunTestFileError'
    id: 'ID'
    slug: 'String'
    status: 'Status'
    suites: 'TestSuite'
    testFile: 'TestFile'
  }
  RunTestFileError: { // field return type name
    message: 'String'
  }
  Subscription: { // field return type name
    runAdded: 'Run'
    runRemoved: 'Run'
    runTestFileUpdated: 'RunTestFile'
    runUpdated: 'Run'
    testAdded: 'Test'
    testFileAdded: 'TestFile'
    testFileRemoved: 'TestFile'
    testFileUpdated: 'TestFile'
    testSuiteAdded: 'TestSuite'
    testSuiteUpdated: 'TestSuite'
    testUpdated: 'Test'
  }
  Test: { // field return type name
    duration: 'Int'
    error: 'TestError'
    id: 'ID'
    status: 'Status'
    title: 'String'
  }
  TestError: { // field return type name
    col: 'Int'
    line: 'Int'
    message: 'String'
    snippet: 'String'
    stack: 'String'
  }
  TestFile: { // field return type name
    deleted: 'Boolean'
    duration: 'Int'
    id: 'ID'
    relativePath: 'String'
    status: 'Status'
  }
  TestSuite: { // field return type name
    duration: 'Int'
    id: 'ID'
    runTestFile: 'RunTestFile'
    status: 'Status'
    tests: 'Test'
    title: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    clearRun: { // args
      input: NexusGenInputs['ClearRunInput']; // ClearRunInput!
    }
    openTestFileInEditor: { // args
      col: number; // Int!
      id: string; // ID!
      line: number; // Int!
    }
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
  Run: {
    runTestFile: { // args
      slug: string; // String!
    }
  }
  Subscription: {
    testAdded: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
    testSuiteAdded: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
    testSuiteUpdated: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
    }
    testUpdated: { // args
      runId: string; // ID!
      runTestFileId?: string | null; // ID
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
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}

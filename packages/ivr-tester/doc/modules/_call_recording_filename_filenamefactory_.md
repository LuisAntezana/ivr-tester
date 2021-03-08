**[IVR Tester](../README.md)**

> [Globals](../README.md) / "call/recording/filename/FilenameFactory"

# Module: "call/recording/filename/FilenameFactory"

## Index

### Type aliases

* [FilenameFactory](_call_recording_filename_filenamefactory_.md#filenamefactory)

## Type aliases

### FilenameFactory

Ƭ  **FilenameFactory**: (stream: [StreamDetails](../interfaces/_call_recording_mediastreamrecorder_.streamdetails.md), callFlowTestDefinition: [CallFlowTestDefinition](../interfaces/_testing_test_callflowtestdefinition_.callflowtestdefinition.md)) => string

*Defined in [packages/ivr-tester/src/call/recording/filename/FilenameFactory.ts:8](https://github.com/SketchingDev/ivr-tester/blob/e4629d5/packages/ivr-tester/src/call/recording/filename/FilenameFactory.ts#L8)*

Returns the filename used for recording a stream. The filename returned does not
need to contain the path nor extension.

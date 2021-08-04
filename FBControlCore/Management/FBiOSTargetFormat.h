/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NSString *FBiOSTargetFormatKey NS_STRING_ENUM;

/**
 The UDID of the iOS Target.
 */
extern FBiOSTargetFormatKey const FBiOSTargetFormatUDID;

/**
 The User-Provided Name of the Target.
 */
extern FBiOSTargetFormatKey const FBiOSTargetFormatName;

/**
 The Apple Device Name.
 */
extern FBiOSTargetFormatKey const FBiOSTargetFormatModel;

/**
 The OS Version of the Target.
 */
extern FBiOSTargetFormatKey const FBiOSTargetFormatOSVersion;

/**
 The State of the Target.
 */
extern FBiOSTargetFormatKey const FBiOSTargetFormatState;

/**
 The Architecture of the Target.
 */
extern FBiOSTargetFormatKey const FBiOSTargetFormatArchitecture;

@protocol FBiOSTarget;

/**
 A Format Specifier for Describing an iOS Device/Simulator Target.
 */
@interface FBiOSTargetFormat : NSObject <NSCopying>

/**
 Creates and returns a new Target Format.

 @param fields the fields to describe with.
 @return a new Target Format.
 */
+ (instancetype)formatWithFields:(NSArray<FBiOSTargetFormatKey> *)fields;

/**
 Creates and returns the Default Target Format.

 @return the Default Target Format.
 */
+ (instancetype)defaultFormat;

/**
 Creates and returns the Full Target Format.

 @return the Full Target Format.
 */
+ (instancetype)fullFormat;

/**
 An ordering of the fields to format targets with.
 */
@property (nonatomic, copy, readonly) NSArray<FBiOSTargetFormatKey> *fields;

/**
 Returns a new Target Description by appending fields.

 @param fields the fields to append.
 @return a new Target Description with the fields applied.
 */
- (instancetype)appendFields:(NSArray<FBiOSTargetFormatKey> *)fields;

/**
 Returns a new Target Description by appending a field.

 @param field the field to append.
 @return a new Target Description with the field applied.
 */
- (instancetype)appendField:(FBiOSTargetFormatKey)field;

/**
 Describes the Target using the reciver's format.

 @param target the target to format.
 @return the format of the target.
 */
- (NSString *)format:(id<FBiOSTarget>)target;

/**
 Extracts target information into a JSON-Serializable Dictionary.

 @param target the target to format.
 @return the JSON-Serializable Description.
 */
- (NSDictionary<NSString *, id> *)extractFrom:(id<FBiOSTarget>)target;

@end

NS_ASSUME_NONNULL_END

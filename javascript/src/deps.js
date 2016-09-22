// Copyright 2012 Google Inc.
// All Rights Reserved.
//
// This file has been auto-generated by GenJsDeps, please do not edit.

// Disable Clang formatter for this file.
// See http://goo.gl/SdiwZH
// clang-format off

goog.addDependency('../../geo/gestalt/client/javascript/abstractoverlay.js', ['ee.AbstractOverlay', 'ee.TileEvent'], ['goog.events.Event', 'goog.events.EventTarget', 'goog.structs.Set'], {});
goog.addDependency('../../geo/gestalt/client/javascript/apifunction.js', ['ee.ApiFunction'], ['ee.ComputedObject', 'ee.Function', 'ee.Types', 'ee.data', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/apitestcase.js', ['ee.ApiTestCase', 'ee.ApiTestCase.BUILTIN_FUNCTIONS'], ['ee', 'ee.data', 'goog.json', 'goog.string', 'goog.testing.TestCase'], {'lang': 'es5'});
goog.addDependency('../../geo/gestalt/client/javascript/arguments.js', ['ee.arguments'], ['ee.ComputedObject', 'goog.array', 'goog.asserts', 'goog.object', 'goog.string', 'goog.structs.Set'], {});
goog.addDependency('../../geo/gestalt/client/javascript/collection.js', ['ee.Collection'], ['ee.ApiFunction', 'ee.Element', 'ee.Filter', 'ee.arguments'], {});
goog.addDependency('../../geo/gestalt/client/javascript/computedobject.js', ['ee.ComputedObject'], ['ee.Encodable', 'ee.Serializer', 'ee.data', 'goog.array'], {});
goog.addDependency('../../geo/gestalt/client/javascript/customfunction.js', ['ee.CustomFunction'], ['ee.ComputedObject', 'ee.Function', 'ee.Number', 'ee.Serializer', 'ee.String', 'ee.Types', 'goog.array', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/data.js', ['ee.data', 'ee.data.AbstractTaskConfig', 'ee.data.AlgorithmArgument', 'ee.data.AlgorithmSignature', 'ee.data.AlgorithmsRegistry', 'ee.data.AssetAcl', 'ee.data.AssetAclUpdate', 'ee.data.AssetDescription', 'ee.data.AssetDetailsProperty', 'ee.data.AssetList', 'ee.data.AssetQuotaDetails', 'ee.data.AssetType', 'ee.data.AuthArgs', 'ee.data.AuthResponse', 'ee.data.Band', 'ee.data.BandDescription', 'ee.data.BandMapping', 'ee.data.DownloadId', 'ee.data.ExportType', 'ee.data.FeatureCollectionDescription', 'ee.data.FeatureVisualizationParameters', 'ee.data.FileSource', 'ee.data.FolderDescription', 'ee.data.GeoJSONFeature', 'ee.data.GeoJSONGeometry', 'ee.data.ImageCollectionDescription', 'ee.data.ImageDescription', 'ee.data.ImageTaskConfig', 'ee.data.ImageVisualizationParameters', 'ee.data.IngestionRequest', 'ee.data.MapId', 'ee.data.MapTaskConfig', 'ee.data.MapZoomRange', 'ee.data.MissingData', 'ee.data.PixelTypeDescription', 'ee.data.ProcessingResponse', 'ee.data.RawMapId', 'ee.data.ReductionPolicy', 'ee.data.ShortAssetDescription', 'ee.data.SystemTimeProperty', 'ee.data.TableDescription', 'ee.data.TableIngestionRequest', 'ee.data.TableTaskConfig', 'ee.data.TaskListResponse', 'ee.data.TaskStatus', 'ee.data.TaskUpdateActions', 'ee.data.ThumbnailId', 'ee.data.Tileset', 'ee.data.VideoTaskConfig'], ['goog.Uri', 'goog.array', 'goog.async.Throttle', 'goog.functions', 'goog.json', 'goog.net.XhrIo', 'goog.net.XmlHttp', 'goog.net.jsloader', 'goog.object', 'goog.string'], {});
goog.addDependency('../../geo/gestalt/client/javascript/date.js', ['ee.Date'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.Types', 'ee.arguments'], {});
goog.addDependency('../../geo/gestalt/client/javascript/deserializer.js', ['ee.Deserializer'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.CustomFunction', 'ee.Date', 'ee.Encodable', 'ee.Function', 'ee.Geometry', 'goog.array', 'goog.json', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/dictionary.js', ['ee.Dictionary'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.Types'], {});
goog.addDependency('../../geo/gestalt/client/javascript/ee.js', ['ee', 'ee.Algorithms', 'ee.InitState'], ['ee.ApiFunction', 'ee.Collection', 'ee.ComputedObject', 'ee.CustomFunction', 'ee.Date', 'ee.Dictionary', 'ee.Element', 'ee.Encodable', 'ee.Feature', 'ee.FeatureCollection', 'ee.Filter', 'ee.Function', 'ee.Geometry', 'ee.Image', 'ee.ImageCollection', 'ee.List', 'ee.Number', 'ee.String', 'ee.Terrain', 'ee.Types', 'ee.data', 'goog.array', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/element.js', ['ee.Element'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.Types', 'goog.array', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/encodable.js', ['ee.Encodable'], [], {});
goog.addDependency('../../geo/gestalt/client/javascript/feature.js', ['ee.Feature'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.Element', 'ee.Geometry', 'ee.arguments', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/featurecollection.js', ['ee.FeatureCollection'], ['ee.ApiFunction', 'ee.Collection', 'ee.ComputedObject', 'ee.Feature', 'ee.Geometry', 'ee.List', 'ee.Types', 'ee.arguments', 'ee.data', 'goog.array'], {});
goog.addDependency('../../geo/gestalt/client/javascript/filter.js', ['ee.Filter'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.arguments', 'goog.array', 'goog.string'], {});
goog.addDependency('../../geo/gestalt/client/javascript/floattileoverlay.js', ['ee.FloatTileOverlay'], ['ee.AbstractOverlay', 'ee.TileEvent', 'goog.array', 'goog.dom', 'goog.dom.TagName', 'goog.net.XmlHttp', 'goog.structs.Map'], {});
goog.addDependency('../../geo/gestalt/client/javascript/function.js', ['ee.Function', 'ee.Function.Signature'], ['ee.ComputedObject', 'ee.Encodable', 'ee.Serializer', 'ee.Types', 'goog.array', 'goog.functions', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/geometry.js', ['ee.Geometry', 'ee.Geometry.LineString', 'ee.Geometry.LinearRing', 'ee.Geometry.MultiLineString', 'ee.Geometry.MultiPoint', 'ee.Geometry.MultiPolygon', 'ee.Geometry.Point', 'ee.Geometry.Polygon', 'ee.Geometry.Rectangle'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.Serializer', 'ee.Types', 'ee.arguments', 'goog.array', 'goog.json.Serializer', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/image.js', ['ee.Image'], ['ee.ApiFunction', 'ee.ComputedObject', 'ee.Element', 'ee.Function', 'ee.Geometry', 'ee.Types', 'ee.arguments', 'ee.data', 'goog.array', 'goog.json', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/imagecollection.js', ['ee.ImageCollection'], ['ee.ApiFunction', 'ee.Collection', 'ee.ComputedObject', 'ee.Image', 'ee.List', 'ee.Types', 'ee.arguments', 'goog.array'], {});
goog.addDependency('../../geo/gestalt/client/javascript/layers/abstractoverlay.js', ['ee.layers.AbstractOverlay', 'ee.layers.AbstractTile', 'ee.layers.TileFailEvent', 'ee.layers.TileLoadEvent'], ['goog.array', 'goog.events', 'goog.events.Event', 'goog.events.EventHandler', 'goog.events.EventTarget', 'goog.fs.FileReader', 'goog.net.EventType', 'goog.net.XhrIo', 'goog.object', 'goog.structs.Map', 'goog.style'], {});
goog.addDependency('../../geo/gestalt/client/javascript/layers/abstracttilesource.js', ['ee.layers.AbstractTileSource'], ['goog.Disposable'], {});
goog.addDependency('../../geo/gestalt/client/javascript/layers/binaryoverlay.js', ['ee.layers.BinaryOverlay', 'ee.layers.BinaryTile'], ['ee.layers.AbstractOverlay', 'ee.layers.AbstractTile', 'goog.fs.FileReader', 'goog.structs.Map'], {});
goog.addDependency('../../geo/gestalt/client/javascript/layers/earthenginetilesource.js', ['ee.layers.EarthEngineTileSource'], ['ee.data', 'ee.layers.AbstractTile', 'ee.layers.AbstractTileSource', 'goog.events', 'goog.structs.PriorityPool'], {});
goog.addDependency('../../geo/gestalt/client/javascript/layers/imageoverlay.js', ['ee.layers.ImageOverlay', 'ee.layers.ImageTile'], ['ee.layers.AbstractOverlay', 'ee.layers.AbstractTile', 'goog.events', 'goog.events.EventType', 'goog.net.EventType', 'goog.net.ImageLoader'], {});
goog.addDependency('../../geo/gestalt/client/javascript/layers/layerstestcase.js', ['ee.layers.TestCase'], ['goog.Promise', 'goog.net.jsloader', 'goog.testing.PropertyReplacer', 'goog.testing.TestCase'], {});
goog.addDependency('../../geo/gestalt/client/javascript/list.js', ['ee.List'], ['ee.ApiFunction', 'ee.ComputedObject', 'goog.array'], {});
goog.addDependency('../../geo/gestalt/client/javascript/maplayeroverlay.js', ['ee.MapLayerOverlay'], ['ee.AbstractOverlay', 'ee.MapTileManager', 'ee.TileEvent', 'goog.array', 'goog.dom', 'goog.dom.TagName', 'goog.events', 'goog.events.EventType', 'goog.iter', 'goog.net.EventType', 'goog.structs.Set', 'goog.style'], {});
goog.addDependency('../../geo/gestalt/client/javascript/maptilemanager.js', ['ee.MapTileManager'], ['ee.data', 'goog.Disposable', 'goog.Uri', 'goog.array', 'goog.events', 'goog.events.Event', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.net.EventType', 'goog.net.ImageLoader', 'goog.net.XhrIo', 'goog.structs.Map', 'goog.structs.PriorityPool'], {});
goog.addDependency('../../geo/gestalt/client/javascript/number.js', ['ee.Number'], ['ee.ApiFunction', 'ee.ComputedObject'], {});
goog.addDependency('../../geo/gestalt/client/javascript/package.js', ['ee.Package'], ['ee.ApiFunction', 'ee.CustomFunction', 'ee.SavedFunction', 'ee.arguments', 'ee.data'], {});
goog.addDependency('../../geo/gestalt/client/javascript/profiler.js', ['ee.data.Profiler'], ['ee.ApiFunction', 'goog.async.Delay', 'goog.events.Event', 'goog.events.EventTarget', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/savedfunction.js', ['ee.SavedFunction'], ['ee.ApiFunction', 'ee.Function'], {});
goog.addDependency('../../geo/gestalt/client/javascript/serializer.js', ['ee.Serializer'], ['ee.Encodable', 'goog.array', 'goog.crypt.Md5', 'goog.json.Serializer', 'goog.object'], {});
goog.addDependency('../../geo/gestalt/client/javascript/string.js', ['ee.String'], ['ee.ApiFunction', 'ee.ComputedObject'], {});
goog.addDependency('../../geo/gestalt/client/javascript/terrain.js', ['ee.Terrain'], ['ee.ApiFunction'], {});
goog.addDependency('../../geo/gestalt/client/javascript/types.js', ['ee.Types'], ['ee.ComputedObject'], {});

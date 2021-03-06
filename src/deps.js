// Copyright 2011 Google Inc.
// All Rights Reserved.
//
// This file has been auto-generated by GenJsDeps, please do not edit.

goog.addDependency('../../../../src/bidichecker.js', ['bidichecker', 'bidichecker.BidiChecker', 'bidichecker.Revision'], ['bidichecker.Error', 'bidichecker.Filter', 'bidichecker.FilterFactory', 'bidichecker.TextErrorScanner', 'bidichecker.gui.server.GuiContainerFactory', 'bidichecker.gui.server.GuiServer', 'goog.array', 'goog.i18n.bidi', 'goog.json', 'goog.userAgent.product']);
goog.addDependency('../../../../src/detector.js', ['bidichecker.Detector'], []);
goog.addDependency('../../../../src/dirchunk.js', ['bidichecker.DirChunk', 'bidichecker.NullDirChunk'], ['bidichecker.HighlightableArea', 'bidichecker.HighlightableText', 'bidichecker.utils', 'goog.array']);
goog.addDependency('../../../../src/dirchunkwalker.js', ['bidichecker.DirChunkWalker'], ['bidichecker.DirChunk', 'bidichecker.DomWalker', 'bidichecker.NullDirChunk', 'goog.events.Event', 'goog.events.EventHandler', 'goog.events.EventTarget']);
goog.addDependency('../../../../src/domwalker.js', ['bidichecker.DomWalker', 'bidichecker.DomWalker.EventTypes'], ['bidichecker.utils', 'goog.array', 'goog.dom', 'goog.dom.TagIterator', 'goog.events.EventTarget', 'goog.style']);
goog.addDependency('../../../../src/error.js', ['bidichecker.Error'], ['bidichecker.HighlightableArea', 'bidichecker.utils', 'goog.array', 'goog.json', 'goog.string.StringBuffer']);
goog.addDependency('../../../../src/errorcollector.js', ['bidichecker.ErrorCollector'], ['bidichecker.Error', 'bidichecker.Filter', 'bidichecker.FrameStack', 'bidichecker.utils', 'goog.array']);
goog.addDependency('../../../../src/filter.js', ['bidichecker.Filter'], ['bidichecker.Error']);
goog.addDependency('../../../../src/filterfactory.js', ['bidichecker.FilterFactory', 'bidichecker.FilterFactory.ComposableFilter'], ['bidichecker.Filter', 'bidichecker.XpathMatcher', 'goog.json']);
goog.addDependency('../../../../src/framestack.js', ['bidichecker.FrameStack', 'bidichecker.FrameStack.EventTypes'], ['goog.events.EventTarget']);
goog.addDependency('../../../../src/gui/app/errorpage.js', ['bidichecker.gui.app.ErrorPage'], ['bidichecker.Error', 'bidichecker.gui.common.CommChannel', 'goog.dom', 'goog.dom.Range', 'goog.events', 'goog.events.EventType']);
goog.addDependency('../../../../src/gui/app/options.js', ['bidichecker.gui.app.OptionsPage'], ['bidichecker', 'bidichecker.gui.common.CommChannel', 'goog.dom', 'goog.events', 'goog.events.EventType']);
goog.addDependency('../../../../src/gui/common/commchannel.js', ['bidichecker.gui.common.CommChannel'], ['goog.events', 'goog.events.EventType', 'goog.json', 'goog.structs.Map']);
goog.addDependency('../../../../src/gui/server/dialogguicontainer.js', ['bidichecker.gui.server.DialogGuiContainer'], ['bidichecker.gui.server.GuiContainer', 'goog.style', 'goog.ui.Dialog']);
goog.addDependency('../../../../src/gui/server/guicontainer.js', ['bidichecker.gui.server.GuiContainer'], []);
goog.addDependency('../../../../src/gui/server/guicontainerfactory.js', ['bidichecker.gui.server.GuiContainerFactory'], ['bidichecker.gui.server.DialogGuiContainer', 'bidichecker.gui.server.WindowGuiContainer']);
goog.addDependency('../../../../src/gui/server/guiserver.js', ['bidichecker.gui.server.GuiServer'], ['bidichecker.Error', 'bidichecker.gui.common.CommChannel', 'bidichecker.gui.server.GuiContainer']);
goog.addDependency('../../../../src/gui/server/windowguicontainer.js', ['bidichecker.gui.server.WindowGuiContainer'], ['bidichecker.gui.server.GuiContainer']);
goog.addDependency('../../../../src/highlightablearea.js', ['bidichecker.HighlightableArea'], []);
goog.addDependency('../../../../src/highlightableelement.js', ['bidichecker.HighlightableElement'], ['bidichecker.HighlightableArea', 'bidichecker.utils', 'goog.style']);
goog.addDependency('../../../../src/highlightabletext.js', ['bidichecker.HighlightableText'], ['bidichecker.HighlightableArea', 'bidichecker.utils', 'goog.dom', 'goog.style']);
goog.addDependency('../../../../src/overalldirectionalitydetector.js', ['bidichecker.OverallDirectionalityDetector'], ['bidichecker.Detector', 'bidichecker.DomWalker', 'bidichecker.Error', 'bidichecker.HighlightableElement', 'bidichecker.Scanner', 'goog.events', 'goog.events.Event']);
goog.addDependency('../../../../src/samples/reviews/i18n.js', ['I18n'], []);
goog.addDependency('../../../../src/samples/reviews/reviews.js', ['ReviewsApp'], ['I18n']);
goog.addDependency('../../../../src/scanner.js', ['bidichecker.Scanner'], ['bidichecker.Detector', 'bidichecker.DirChunkWalker', 'bidichecker.DomWalker', 'bidichecker.ErrorCollector', 'bidichecker.XpathMatcher', 'goog.i18n.bidi']);
goog.addDependency('../../../../src/spilloverdetector.js', ['bidichecker.SpilloverDetector'], ['bidichecker.Detector', 'bidichecker.DomWalker', 'bidichecker.Error', 'bidichecker.HighlightableText', 'bidichecker.Scanner', 'goog.array', 'goog.events', 'goog.events.EventHandler']);
goog.addDependency('../../../../src/texterrorscanner.js', ['bidichecker.TextErrorScanner'], ['bidichecker.Detector', 'bidichecker.ErrorCollector', 'bidichecker.OverallDirectionalityDetector', 'bidichecker.Scanner', 'bidichecker.SpilloverDetector', 'bidichecker.UndeclaredFieldDetector', 'bidichecker.UndeclaredTextDetector', 'goog.i18n.bidi']);
goog.addDependency('../../../../src/undeclaredfielddetector.js', ['bidichecker.UndeclaredFieldDetector'], ['bidichecker.Detector', 'bidichecker.DomWalker', 'bidichecker.Error', 'bidichecker.HighlightableElement', 'bidichecker.Scanner', 'goog.array', 'goog.events', 'goog.events.EventHandler']);
goog.addDependency('../../../../src/undeclaredtextdetector.js', ['bidichecker.UndeclaredTextDetector'], ['bidichecker.Detector', 'bidichecker.DirChunk', 'bidichecker.DirChunkWalker', 'bidichecker.Error', 'bidichecker.Scanner', 'bidichecker.utils', 'goog.array', 'goog.events', 'goog.events.Event', 'goog.events.EventHandler']);
goog.addDependency('../../../../src/utils.js', ['bidichecker.utils', 'bidichecker.utils.Substring'], ['goog.array', 'goog.dom', 'goog.dom.TagIterator', 'goog.style']);
goog.addDependency('../../../../src/xpathmatcher.js', ['bidichecker.XpathMatcher'], []);

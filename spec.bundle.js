import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import 'rxjs';

getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

const testContext = require.context('./tests/services', true, /\.spec\.ts/);
const testModulesContext = require.context('./tests/modules', true, /\.spec\.ts/);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

const testServices = requireAll(testContext);
const testModules = requireAll(testModulesContext);
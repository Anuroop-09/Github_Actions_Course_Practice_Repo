const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('actions/exec');

async function run() {
    core.notice('Hello from my custom javascript action!');
}

run();
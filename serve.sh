#!/bin/bash

set -euo pipefail

find generator | entr -r ./node_modules/.bin/ts-node --transpile-only generator docs/index.html &
python -m 'http.server' -d ./docs

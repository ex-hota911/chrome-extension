// Copyright 2011, the Google Tasks Chrome Extension authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function addTaskClickHandler(info, tab) {
  var text = info['selectionText'];
  var notes = info['pageUrl'];
  addTask({
      'title': text,
      'notes': notes
  });
}

function addPageClickHandler(info, tab) {
  var text = tab['title'];
  var notes = tab['url'];
    //addParentTask({'title': text}, {'title': notes});
    addTask({'title': text + ' ' + notes});
}

chrome.contextMenus.create({
  'title': 'Create Task for \'%s\'',
  'contexts': ['selection'],
  'onclick': addTaskClickHandler
});

chrome.contextMenus.create({
    'title': 'Create Task for This Page',
    'onclick': addPageClickHandler
});
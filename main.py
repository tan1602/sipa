import threading
import sys
import os
import pandas as pd
import numpy as np
from datetime import datetime, timezone, timedelta
from flask import Flask, jsonify, request, render_template, redirect
from flask_wtf.csrf import CSRFProtect
# from flask_cors import CORS, cross_origin
import json
import re

import time
import atexit

app = Flask(__name__)
csrf = CSRFProtect(app)
app.config.update(dict(
    SECRET_KEY="unhandledQueries",
    WTF_CSRF_SECRET_KEY="unhandledQueriesCSRF"
))
@app.route('/', methods=['POST', 'GET'])
def portfolio():
    return render_template('index.html', name='index')

if __name__ == '__main__':

    port = int(os.environ.get("PORT", 8020))   # 8051
    app.run(host='0.0.0.0', port=port, threaded = True)
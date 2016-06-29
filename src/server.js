import { express, cors, debug as Debug, bodyParser, morgan as logger } from './libs/Utils';
import Route from './libs/Route';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cors
app.use(cors({origin: '*' }));

// Bind Routes
Route(app);

module.exports = app;

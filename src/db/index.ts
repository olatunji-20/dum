/*
 * Copyright (c) 2024 drolx Labs
 * 
 * Licensed under the drolx Project License 1.0
 * you may not use this file except in compliance with the License.
 *     https://drolx.com/licenses/project-license-1.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * Author: Falana Sheriff (you@you.you)
 * Created At: Tuesday, 26th Nov 2024
 * Modified By: Falana Sheriff
 * Modified At: Tue Nov 26 2024
 */

import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' }); // or .env.local

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle({ client });

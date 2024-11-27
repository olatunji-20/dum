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

import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});







export const journeySchedule = pgTable('journey_schedule', {
  id: text('id').primaryKey(),
  journeyId: text('id').notNull(),
  departureTime: timestamp('departure_time').notNull(),
  arrivalTime: timestamp('arrival_time').notNull()
})

export const journeyTemplate = pgTable('journey_template', {
  id: text('id').primaryKey(),
  description: text('description').notNull(),
  sourceDepot: text('source_depot').notNull(),
  destinationDepot: text('destination_depot').notNull(),
  dropPoints: text('drop_points'),
  vehicleTypes: text('vehicle_types'),
  prices: text('prices'),
  notes: text('notes').notNull(),
})







export const postsTable = pgTable('posts_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;

export type InsertJourneySchedule = typeof journeySchedule.$inferInsert;
export type SelectJourneySchedule = typeof journeySchedule.$inferSelect;

export type InsertJourneyTemplate = typeof journeyTemplate.$inferInsert;
export type SelectJourneyTemplate = typeof journeyTemplate.$inferSelect;
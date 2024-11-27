CREATE TABLE IF NOT EXISTS "journey_schedule" (
	"id" text NOT NULL,
	"departure_time" timestamp NOT NULL,
	"arrival_time" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "journey_template" (
	"id" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"source_depot" text NOT NULL,
	"destination_depot" text NOT NULL,
	"drop_points" text,
	"vehicle_types" text,
	"prices" text,
	"notes" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

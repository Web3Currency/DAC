# DAC administrator provisioning

The media dashboard requires a Supabase Auth user whose server-managed `app_metadata.role` is `admin`. The upload endpoint validates the bearer token against Supabase Auth and checks this claim on every upload-token request.

## Provision the first administrator

1. Create the administrator user in Supabase Authentication (Dashboard → Authentication → Users → Add user).
2. Confirm the intended administrator email with the DAC project owner before sending credentials.
3. In Supabase SQL Editor, replace the placeholder with the new Auth user UUID and run:

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
  || jsonb_build_object('role', 'admin')
where id = 'REPLACE-WITH-AUTH-USER-UUID';
```

4. The administrator signs in at `/admin`. The claim is in the signed access token; sign out and back in after changing it.

Do not use user-editable `user_metadata` for authorization. Do not expose the Blob read-write token or Supabase service-role key in browser code. Public signup is not implemented.
